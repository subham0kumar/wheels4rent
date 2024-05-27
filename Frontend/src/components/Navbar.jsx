import React from "react";
import carIcon from "../static/Icons/car-2.png";

const Navbar = () => {
  return (
    <nav className="text-Gbay-950 font-semibold absolute top-0 left-0 right-0 px-40 w-full z-20 font-rubik flex items-center justify-between py-8">
      <section className="left-section">
        <img src={carIcon} alt="" width={100} />
      </section>
      <section className="middle-section">
        <ul className="flex gap-10">
          <li className="bg-gradient-to-r from-Gbay-700 to-Gbay-700 px-1 text-950 underAnimate">
            <a href="/">Home</a>
          </li>
          <li className="bg-gradient-to-r from-Gbay-700 to-Gbay-700 px-1 text-950 underAnimate">
            <a href="/about">About</a>
          </li>
          <li className="bg-gradient-to-r from-Gbay-700 to-Gbay-700 px-1 text-950 underAnimate">
            <a href="/models">Vehicle Models</a>
          </li>
          <li className="bg-gradient-to-r from-Gbay-700 to-Gbay-700 px-1 text-950 underAnimate">
            <a href="/testimonials">Testimonials</a>
          </li>
          <li className="bg-gradient-to-r from-Gbay-700 to-Gbay-700 px-1 text-950 underAnimate">
            <a href="/team">Our Team</a>
          </li>
          <li className="bg-gradient-to-r from-Gbay-700 to-Gbay-700 px-1 text-950 underAnimate">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </section>
      <section className="right-section flex gap-4">
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
