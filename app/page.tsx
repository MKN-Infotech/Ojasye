import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Quiz from "@/components/Quiz";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Science from "@/components/Science";
import Plans from "@/components/Plans";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import AIChatBubble from "@/components/AIChatBubble";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustedBy />
      <Quiz />
      <HowItWorks />
      <Results />
      <Science />
      <Plans />
      <Team />
      <FAQ />
      <FinalCTA />
      <Footer />
      <AIChatBubble />
    </>
  );
}
