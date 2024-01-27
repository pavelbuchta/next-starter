import AboutSection from "@/components/sections/about/about";
import FAQSection from "@/components/sections/faqs/faqs";
import HappyClientsSection from "@/components/sections/happy-clients/happy-clients";
import HeroSection from "@/components/sections/hero";
import LogosSection from "@/components/sections/logos/logos";
import ServicesSection from "@/components/sections/services/services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogosSection />
      <ServicesSection />
      <FAQSection />
      <AboutSection />
      <HappyClientsSection />
    </main>
  );
}
