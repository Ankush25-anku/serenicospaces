import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Expertise from "@/components/Expertise";
import FeaturedInterior from "@/components/FeaturedInterior";

import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
    

        {/* HOME */}
   
          <Hero />
 

        {/* ABOUT */}
     
          <About />
  

        {/* PROJECTS */}

          <FeaturedInterior />
     

        {/* EXPERTISE */}
       
          <Expertise />


        {/* SERVICES */}
     
          <Services />
      

        {/* CONTACT */}
     
          <ContactForm />
   
     

    
    </>
  );
}
