import { Footer } from "./components/footer";
import { Header } from "./components/header";
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
    <main>
      <MessageProvider>
        <Header />
        <HeroSection />
        <Resources />
        <Technologies />
        <Plans />
        <ContactForm />
        <Toaster position="bottom-right" />
        <WhatsappMessage />
        <Footer />
      </MessageProvider>
    </main>
  );
}
