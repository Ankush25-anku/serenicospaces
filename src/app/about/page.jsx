import AboutLuxury from "@/components/AboutLuxury";
import LuxuryShowcase from "@/components/LuxuryShowcase";
import Praise from "@/components/Praise";
import React from "react";
import InstagramGallery from "@/components/InstagramGallery";

const page = () => {
  return (
    <div>
      <AboutLuxury />
  <div className="desktop-showcase">
  <LuxuryShowcase />
</div>
      <Praise />
      <InstagramGallery />
    </div>
  );
};

export default page;
