import React from "react";
import { IoCarSportSharp } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiCarProfileDuotone } from "react-icons/pi";

const PlanSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="font-rubik pt-16 pb-24 flex flex-col items-center text-center space-y-10"
    >
      <span>
        <h3 className="text-2xl font-bold my-4">Plan your trip now</h3>
        <h2 className="text-5xl font-bold">Quick & easy Car rental</h2>
      </span>
      <div className="flex gap-40 mx-4">
        <span className="flex flex-col items-center justify-center space-y-3">
          <div
            className="mt-14 mb-10 bg-Gbay-200 p-6"
            style={{ borderRadius: "35% 65% 73% 27% / 48% 43% 57% 52% " }}
          >
            <IoCarSportSharp size={70} color="#4338ca" />
          </div>
          <h3 className="text-2xl font-bold"> Select Car</h3>
          <p className="font-poppins text-Fray-400">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </span>
        <span className="flex flex-col items-center justify-center space-y-3">
          <div
            className="mt-14 mb-10 bg-Gbay-200 p-6"
            style={{ borderRadius: "14% 86% 46% 54% / 51% 49% 51% 49% " }}
          >
            <MdOutlineSupportAgent size={70} color="#4338ca" />
          </div>
          <h3 className="text-2xl font-bold">Contact Operator</h3>
          <p className="font-poppins text-Fray-400">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </span>
        <span className="flex flex-col items-center justify-center space-y-3">
          <div
            className="mt-14 mb-10 bg-Gbay-200 p-6"
            style={{ borderRadius: "76% 24% 53% 47% / 73% 71% 29% 27% " }}
          >
            <PiCarProfileDuotone size={70} color="#4338ca" />
          </div>
          <h3 className="text-2xl font-bold">Let's Drive</h3>
          <p className="font-poppins text-Fray-400">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </span>
      </div>
    </section>
  );
});

export default PlanSection;
