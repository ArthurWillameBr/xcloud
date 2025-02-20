import { Footer } from "./components/footer";
import { Header } from "./components/heander";
import { HeroSection } from "./components/hero-section";
import { Resources } from "./components/resources";
import { Technologies } from "./components/technologies";
import { Plans } from "./components/plans";
import { WhatsappMessage } from "./components/ui/whatsapp-message";
import { ContactForm } from "./components/contact-form";
import { Toaster } from "react-hot-toast";
import { MessageProvider } from "./contexts/message-context";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Resources />
      <Technologies />
      <MessageProvider>
        <Plans />
        <ContactForm />
      </MessageProvider>
      <Toaster position="bottom-right" />
      <WhatsappMessage />
      <Footer />
    </>
  );
}
