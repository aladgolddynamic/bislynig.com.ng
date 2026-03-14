import MainHeader from "@/components/MainHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TechExpertiseSection from "@/components/TechExpertiseSection";
import IndustriesSection from "@/components/IndustriesSection";
import TeamPreviewSection from "@/components/TeamPreviewSection";
import OperationsStrip from "@/components/OperationsStrip";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <MainHeader />
      <main className="overflow-hidden">
        <FadeIn delay={0}>
          <HeroSection />
        </FadeIn>
        <FadeIn delay={100}>
          <AboutSection />
        </FadeIn>
        <FadeIn delay={100}>
          <ServicesSection />
        </FadeIn>
        <FadeIn delay={100}>
          <WhyChooseSection />
        </FadeIn>
        <FadeIn delay={100}>
          <TechExpertiseSection />
        </FadeIn>
        <FadeIn delay={100}>
          <IndustriesSection />
        </FadeIn>
        <FadeIn delay={100}>
          <TeamPreviewSection />
        </FadeIn>
        <FadeIn delay={100}>
          <OperationsStrip />
        </FadeIn>
        <FadeIn delay={100}>
          <CTASection />
        </FadeIn>
        <FadeIn delay={100}>
          <ContactSection />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
