import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Pipeline from "@/components/Pipeline";
import Interface from "@/components/Interface";
import Cast from "@/components/Cast";
import Install from "@/components/Install";
import Faq from "@/components/Faq";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pipeline />
      <Interface />
      <Cast />
      <Install />
      <Faq />
    </main>
  );
}
