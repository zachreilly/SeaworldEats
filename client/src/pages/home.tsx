import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-inter bg-warm-white">
      <Header />
      <Hero />
      <QuickInfo />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
