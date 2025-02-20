import { Footer } from "./components/footer";
import { Header } from "./components/heander";
import { HeroSection } from "./components/hero-section";
import { Resources } from "./components/resources";
import { Technologies } from "./components/technologies";
import { Plans } from "./components/plans";
import { WhatsappMessage } from "./components/ui/whatsapp-message";
import { ContactForm } from "./components/contact-form";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Resources />
      <Technologies />
      <Plans />
      <ContactForm />
      <WhatsappMessage />
      <Footer />
    </>
  );
}
