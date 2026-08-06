#!/usr/bin/env bash
# Re-fire the Pages deploy once GitHub itself is healthy again, then PROVE the live
# site actually changed.
#
# Why this exists: on 2026-08-06 the deploy failed twice in a row, identically — build
# green, then the deployment sat `waiting → queued` and errored at exactly 15 minutes
# (actions/deploy-pages' own timeout) because GitHub was in a major outage for both
# Actions and Pages. Re-running into an outage just reproduces it. So: wait for the
# platform, THEN retry, and check the rendered page rather than trusting a green run.
#
#   bash scripts/deploy-when-github-recovers.sh [expected-version]
set -uo pipefail

REPO="${REPO:-Misc42/theclub-landing}"
WANT="${1:-0.7.9}"
URL="https://misc42.github.io/theclub-landing/"
DEADLINE=$(( $(date +%s) + 6*3600 ))   # give up after 6h rather than poll forever
POLL="${POLL:-300}"

say() { printf '[%s] %s\n' "$(date +%H:%M:%S)" "$*"; }

github_healthy() {
  curl -s --max-time 20 https://www.githubstatus.com/api/v2/summary.json 2>/dev/null |
    python3 -c '
import sys, json
try:
    d = json.load(sys.stdin)
except Exception:
    sys.exit(2)                       # unreadable status page is NOT healthy
bad = [c["name"] for c in d.get("components", [])
       if not c.get("group") and c["name"] in ("Actions", "Pages")
       and c["status"] != "operational"]
sys.exit(1 if bad else 0)
'
}

live_version() {
  curl -s --max-time 25 "$URL" 2>/dev/null | grep -oE 'theClub_[0-9]+\.[0-9]+\.[0-9]+_amd64\.deb' | head -1
}

say "waiting for Actions + Pages to be operational (want $WANT live at $URL)"
while [ "$(date +%s)" -lt "$DEADLINE" ]; do
  if github_healthy; then
    say "GitHub is operational — firing the deploy"
    break
  fi
  sleep "$POLL"
done
github_healthy || { say "gave up: GitHub still degraded after 6h, nothing retried"; exit 1; }

# Re-run the most recent run's failed jobs; if the newest run is already green, the
# deploy landed on its own while we waited and there is nothing to retry.
RUN=$(gh run list -R "$REPO" --limit 1 --json databaseId,conclusion --jq '.[0] | "\(.databaseId) \(.conclusion)"')
ID=${RUN%% *}; CONC=${RUN##* }
if [ "$CONC" = "success" ]; then
  say "newest run $ID already succeeded — nothing to retry"
else
  say "re-running failed jobs of $ID"
  gh api "repos/$REPO/actions/runs/$ID/rerun-failed-jobs" -X POST >/dev/null 2>&1 ||
    say "rerun request rejected — will still check the live page below"
fi

say "waiting for the run to finish"
for _ in $(seq 1 90); do
  S=$(gh run list -R "$REPO" --limit 1 --json status --jq '.[0].status')
  [ "$S" = "completed" ] && break
  sleep 20
done
say "run: $(gh run list -R "$REPO" --limit 1 --json conclusion --jq '.[0].conclusion')"

# A green run is not a shipped page — Pages serves from a CDN and can lag. Assert on
# what a visitor actually gets.
for _ in $(seq 1 20); do
  V=$(live_version)
  if [ "$V" = "theClub_${WANT}_amd64.deb" ]; then
    say "LIVE: $V ✅"
    exit 0
  fi
  sleep 30
done
say "run finished but the live page still serves '${V:-<nothing>}' — not shipped"
exit 1
