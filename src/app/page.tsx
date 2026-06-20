import { Background } from "@/components/background";
import { Certifications } from "@/components/blocks/certifications";
import { ContactSection } from "@/components/blocks/contact-section";
import { Features } from "@/components/blocks/features";
import { GlobalPresence } from "@/components/blocks/global-presence";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { Process } from "@/components/blocks/process";
import { SelectedWork } from "@/components/blocks/selected-work";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Logos />
        <Features />
        <Process />
        <GlobalPresence />
        <SelectedWork />
        <Certifications />
        <ContactSection />
      </Background>
    </>
  );
}
