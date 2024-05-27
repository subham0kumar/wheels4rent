import React from "react";
import HeroSection from "../components/LandingComponents/HeroSection";
import city from "../static/hero-bg.png";
import BookTrip from "../components/LandingComponents/BookTrip";
import PlanSection from "../components/LandingComponents/PlanSection";
import VehicleModel from "../components/LandingComponents/VehicleModels";
import OfferSection from "../components/LandingComponents/OfferSection";
import ChooseUs from "../components/LandingComponents/ChooseUs";
import TestimonialSection from "../components/LandingComponents/TestimonialSection";
import FAQ from "../components/LandingComponents/FAQ";

const LandingPage = () => {
  return (
    <div className="mx-40">
      <img
        src={city}
        alt="city"
        width={600}
        className="opacity-25 absolute left-0 -top-10 z-0"
      />
      <HeroSection />
      <BookTrip />
      <PlanSection />
      <VehicleModel />
      <OfferSection />
      <ChooseUs />
      <TestimonialSection />
      <FAQ />
    </div>
  );
};

export default LandingPage;
