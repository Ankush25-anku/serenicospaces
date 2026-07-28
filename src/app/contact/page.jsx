import ContactSection from "@/components/ContactSection";
import LocationMap from "@/components/LocationMap";
import LocationSection from "@/components/LocationSection";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactSection />
      <LocationSection />
      <LocationMap />
    </div>
  );
};

export default page;
