import React from "react";
import Button from "./Util/Button";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { RiBloggerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { IoCodeWorkingSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="pt-10 font-poppins lg:text-left text-center grid lg:grid-cols-4 gap-10 lg:p-20">
        <section className="px-10 flex flex-col lg:items-start items-center">
          <h3 className="text-lg lg:text-2xl font-rubik mb-2">
            <span className="font-bold">CAR</span> Rental
          </h3>
          <p className="text-sm">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <span className="flex flex-col font-bold mt-8 gap-3">
            <h4 className="flex gap-3 items-center hover:text-Gbay-700 hover:cursor-pointer">
              <FaPhone />
              (+91)-123-456-7890
            </h4>
            <h4 className="flex gap-3 items-center hover:text-Gbay-700 hover:cursor-pointer">
              <MdEmail />
              wheels4rent@gmail.com
            </h4>
          </span>
        </section>
        <section className="flex flex-col lg:items-start items-center px-10">
          <h3 className="font-bold text-lg lg:text-2xl font-rubik mb-2">
            COMPANY
          </h3>
          <ul className="flex flex-col gap-3">
            <li>Asansol</li>
            <li>Careers</li>
            <li>Mobile</li>
            <li>Blog</li>
            <li>How We Work</li>
          </ul>
        </section>
        <section className="flex flex-col lg:items-start items-center px-10">
          <h3 className="font-bold text-2xl font-rubik mb-2">WORKING HOURS</h3>
          <ul className="flex flex-col gap-3">
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
        </section>
        <section className="flex flex-col lg:items-start items-center px-10">
          <h3 className="font-bold text-lg lg:text-2xl font-rubik mb-2">
            SUBSCRIPTION
          </h3>
          <p className="text-sm mb-3">
            Subscribe your Email address for latest news & updates.
          </p>
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
        </section>
      </footer>
      <section className="py-6 flex bg-Gbay-950 text-Gbay-50 items-center justify-center">
        ©️ Developed By Subham Kumar
      </section>
    </>
  );
};

export default Footer;
