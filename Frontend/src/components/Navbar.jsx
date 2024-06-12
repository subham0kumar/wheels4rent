import React, { useState } from "react";
import carIcon from "/static/Icons/car-2.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  if (showNav) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  const linkStyle =
    "bg-gradient-to-r from-Gbay-700 to-Gbay-700 px-1 text-950 underAnimate";
  return (
    <nav className="text-Gbay-950 font-semibold absolute top-0 left-0 right-0 px-5 lg:px-40 w-full z-20 font-rubik flex items-center justify-between lg:py-8 py-4 bg-[#ffffff00] backdrop-blur-sm">
      <section className="left-section">
        <a href="/">
          <img src={carIcon} alt="" width={100} />
        </a>
      </section>
      <button
        className="lg:hidden border rounded text-Gbay-700 p-1"
        onClick={() => setShowNav(true)}
      >
        <RxHamburgerMenu size={30} />
      </button>

      {/* <======================= Mobile Navbaar =====================> */}
      <div
        className={`w-screen left-0 top-0 fixed p-6 flex-col items-center justify-start gap-10 h-screen bg-Gbay-100 z-20 transition-all duration-300 ease-in-out ${
          showNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex flex-row-reverse">
          <button className="text-Gbay-700" onClick={() => setShowNav(false)}>
            <IoCloseCircleOutline size={45} />
          </button>
        </div>
        <div className="flex items-center justify-center h-[75vh]">
          <ul className="text-Gbay-900 flex flex-col gap-10 text-xl lg:text-3xl items-center">
            {" "}
            <li className="hover:underline underline-offset-4">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline underline-offset-4">
              <a href="/about">About</a>
            </li>
            <li className="hover:underline underline-offset-4">
              <a href="/models">Vehicle Models</a>
            </li>
            <li className="hover:underline underline-offset-4">
              <a href="/testimonials">Testimonials</a>
            </li>
            <li className="hover:underline underline-offset-4">
              <a href="/team">Our Team</a>
            </li>
            <li className="hover:underline underline-offset-4">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* <======================= Default Navbaar =====================> */}
      <section className="lg:block hidden middle-section">
        <ul className="flex gap-10">
          <li className={linkStyle}>
            <a href="/">Home</a>
          </li>
          <li className={linkStyle}>
            <a href="/about">About</a>
          </li>
          <li className={linkStyle}>
            <a href="/models">Vehicle Models</a>
          </li>
          <li className={linkStyle}>
            <a href="/testimonials">Testimonials</a>
          </li>
          <li className={linkStyle}>
            <a href="/team">Our Team</a>
          </li>
          <li className={linkStyle}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </section>
      <section className="lg:flex hidden right-section gap-4">
        <button className="transition-all duration-100 ease-in-out shadow-[5px_5px_0_rgba(54,44,166,0.5)] border-2 border-Gbay-950 bg-Gbay-50 text-Gbay-950 hover:bg-Gbay-950 hover:text-Gbay-50 px-6 rounded font-semibold active:translate-y-1 active:translate-x-1 active:shadow-none">
          Sign up
        </button>
        <button className="border-2 transition-all duration-100 ease-in-out shadow-[5px_5px_0_rgba(54,44,166,0.5)] hover:shadow-[5px_5px_0_rgba(54,44,166,0.5)] bg-Gbay-600 px-6 py-2 text-Gbay-50 rounded font-semibold active:translate-y-1 active:translate-x-1 active:shadow-none">
          Register
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
