import React from "react";
import HeroSection from "../components/HeroSection";
import DescriptionSection from "../components/DescriptionSection";
import BuildFlexSection from "../components/BuildFlexSection";

const Home = () => {
  return (
    <div className="container sm:max-w-screen-2xl mx-auto px-8">
      <HeroSection />
      <DescriptionSection />
      <BuildFlexSection />
    </div>
  );
};

export default Home;
