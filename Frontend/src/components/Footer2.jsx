import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Button from "./Util/Button";

const Footer2 = () => {
  return (
    <>
      <div className="p-20 lg:text-left text-center grid lg:grid-cols-4 gap-14 font-rubik px-8 text-Gbay-950">
        <ul className="p-4 flex flex-col lg:items-start items-center lg:justify-start justify-center gap-2">
          <li className="font-bold text-2xl">
            Car<span className="font-normal"> Rental</span>
          </li>
          <li>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </li>
          <li className="cursor-pointer hover:text-Gbay-700 font-semibold flex items-center gap-4">
            <FaPhone />
            <span>(+91) 123-456-7890</span>
          </li>
          <li className="cursor-pointer hover:text-Gbay-700 font-semibold flex items-center gap-4">
            <MdEmail />
            <span>wheels4rent@gmail.com</span>
          </li>
        </ul>
        <ul className="p-4 flex flex-col lg:items-start items-center lg:justify-start justify-center gap-2">
          <li className="text-2xl font-bold">Company</li>
          <li>Asansol</li>
          <li>Careers</li>
          <li>Mobile</li>
          <li>How we work</li>
        </ul>
        <ul className="p-4 flex flex-col lg:items-start items-center lg:justify-start justify-center gap-2">
          <li className="text-2xl">
            <span className="font-bold">Working</span> Hours
          </li>
          <li>Mon - Fri: 9:00AM - 9:00PM</li>
          <li>Sat: 9:00AM - 19:00PM</li>
          <li>Sun: Closed</li>
        </ul>
        <ul className="p-4 flex flex-col lg:items-start items-center lg:justify-start justify-center gap-2">
          <li className="text-2xl font-bold">Subscription</li>
          <li>Subscribe your Email address for latest news & updates.</li>
          <li>
            {" "}
            <form
              className="flex flex-col gap-3 mb-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Enter Your Email"
                className="py-4 px-2 lg:px-6"
              />
              <Button title="Submit" />
            </form>
          </li>
        </ul>
      </div>
      <section className="py-6 flex bg-Gbay-950 text-Gbay-50 items-center justify-center">
        ©️ Developed By Subham Kumar
      </section>
    </>
  );
};

export default Footer2;
