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

      <main>
        {/* HOME */}
        <section id="home">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about">
          <About />
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <FeaturedInterior />
        </section>

        {/* EXPERTISE */}
        <section id="expertise">
          <Expertise />
        </section>

        {/* SERVICES */}
        <section id="services">
          <Services />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
