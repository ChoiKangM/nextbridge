import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValueSection from "@/components/sections/ValueSection";
import TargetSection from "@/components/sections/TargetSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValueSection />
        <TargetSection />
        <CurriculumSection />
        <OutcomesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
