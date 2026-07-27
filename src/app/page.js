import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Expertise from "@/components/Expertise";
import FeaturedInterior from "@/components/FeaturedInterior";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <FeaturedInterior />
      <Expertise />
      <Services />
      <ContactForm />
      <Footer />
    </>
  );
}
