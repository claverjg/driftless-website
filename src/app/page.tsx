import { ContactSection } from "@/components/sections/contact-section";
import { FounderSection } from "@/components/sections/founder-section";
import { GitopsFlowSection } from "@/components/sections/gitops-flow-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OffersSection } from "@/components/sections/offers-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TerminalSection } from "@/components/sections/terminal-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <GitopsFlowSection />
        <TerminalSection />
        <OffersSection />
        <FounderSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
