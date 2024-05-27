import React from "react";
import { FaPhone } from "react-icons/fa6";

const ContactBanner = () => {
  return (
    <div>
      <section className="z-50 font-poppins relative flex flex-col items-center justify-center w-[98.95vw] left-[50%] -translate-x-[50%] h-[30vh] bg-Gbay-950 mb-20 text-Gbay-50">
        <h1 className="text-[4rem] font-bold">
          Get your favourite ride by contacting us !
        </h1>
        <h3 className="flex gap-4 items-center text-[2rem] mt-4">
          <FaPhone />
          <span className="text-Gbay-400 font-semibold tracking-wider font-rubik">
            (+91)-123-456-7890
          </span>
        </h3>
      </section>
    </div>
  );
};

export default ContactBanner;
