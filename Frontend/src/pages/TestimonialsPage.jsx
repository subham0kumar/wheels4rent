import React from "react";
import Banner from "../components/Util/Banner";
import TestimonialSection from "../components/LandingComponents/TestimonialSection";
import { FaPhone } from "react-icons/fa6";
import ContactBanner from "../components/Util/ContactBanner";

const TestimonialsPage = () => {
  return (
    <div>
      <Banner PageTitle={"Testimonials"} />
      <div className="lg:mx-40 mx-8 lg:my-20">
        <TestimonialSection />
      </div>
      <ContactBanner />
    </div>
  );
};

export default TestimonialsPage;
