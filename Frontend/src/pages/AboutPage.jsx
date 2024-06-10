import React from "react";
import Banner from "../components/Util/Banner";
import { GiHomeGarage } from "react-icons/gi";
import { TbCarSuv } from "react-icons/tb";
import PlanSection from "../components/LandingComponents/PlanSection";
import { FaPhone } from "react-icons/fa6";
import ContactBanner from "../components/Util/ContactBanner";

const AboutPage = () => {
  return (
    <div className="font-rubik">
      <Banner PageTitle={"About"} />
      <div className="mx-40">
        <div className="flex font-normal mr-20 mt-20">
          <img src="/static/sapiens.png" width={650} alt="work" />

          <div className="pt-10 space-y-4">
            <h4 className="text-2xl font-semibold">About Company</h4>
            <h1 className="text-5xl font-bold">
              You start the engine and your adventure begins
            </h1>
            <p className="font-poppins">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="flex gap-14">
              <span className="flex flex-col items-center">
                <TbCarSuv size={65} color="#5246e5" />
                <span className="flex gap-3 items-center mt-3">
                  <h3 className="text-4xl font-bold">15</h3>
                  <h6 className="text-lg">Car Types</h6>
                </span>
              </span>
              <span className="flex flex-col items-center ">
                <img
                  src="\static\Icons\garage-house.png"
                  alt="garage-house"
                  width={60}
                />
                <span className="flex gap-2 items-center mt-4">
                  <h3 className="text-4xl font-bold">87</h3>
                  <h6 className="text-lg">Rental Outlets</h6>
                </span>
              </span>
              <span className="flex flex-col items-center">
                <GiHomeGarage size={60} color="#5246e5" />
                <span className="flex gap-2 items-center mt-4">
                  <h3 className="text-4xl font-bold">69</h3>
                  <h6 className="text-lg">Repair Shops</h6>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="mx-40">
          <PlanSection />
        </div>

        <ContactBanner />
      </div>
    </div>
  );
};

export default AboutPage;
