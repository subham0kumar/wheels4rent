import React from "react";
import { LuCar } from "react-icons/lu";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { TbWheel } from "react-icons/tb";
import Button from "../Util/Button";

const ChooseUs = () => {
  return (
    <section className="relative lg:py-28 font-poppins">
      <div className="lg:block hidden absolute -top-56 -left-[60%] z-0">
        <TbWheel size={1400} color="#e2e0ff" />
      </div>
      <div className="pb-20 grid place-items-center">
        <img src="/static/GroupOfCars.png" alt="cars" className="z-50" />
      </div>
      <main className="flex lg:flex-row flex-col items-center justify-between">
        <aside className="text-center lg:w-[40%] space-y-5 z-50">
          <h4 className="text-lg lg:text-2xl font-rubik font-semibold">
            Why Choose Us
          </h4>
          <h1 className="text-3xl lg:text-5xl font-rubik font-bold">
            Best valued deals you will ever find.
          </h1>
          <p className="text-sm text-justify">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <Button title="Find Details »" />
        </aside>
        <aside className="text-center lg:w-[40%] pt-8 space-y-6 lg:space-y-8 lg:text-justify z-50">
          <span className="flex lg:flex-row flex-col gap-6 items-center">
            <div className="bg-Gbay-200 p-3 rounded-full">
              <LuCar size={60} color="#4338ca" />
            </div>
            <span>
              <h2 className="text-lg lg:text-2xl font-bold mb-2">
                Cross Country Drive
              </h2>
              <p className="text-sm">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </span>
          </span>
          <span className="flex lg:flex-row flex-col gap-6 items-center">
            <div className="bg-Gbay-200 p-3 rounded-full">
              <RiMoneyRupeeCircleLine size={60} color="#4338ca" />
            </div>
            <span>
              <h2 className="text-lg lg:text-2xl font-bold mb-2">
                All Inclusive Pricing
              </h2>
              <p className="text-sm">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </span>
          </span>
          <span className="flex lg:flex-row flex-col gap-6 items-center">
            <div className="bg-Gbay-200 p-3 rounded-full">
              <PiHandCoinsDuotone size={60} color="#4338ca" />
            </div>
            <span>
              <h2 className="text-lg lg:text-2xl font-bold mb-2">
                No Hidden Charges
              </h2>
              <p className="text-sm">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </span>
          </span>
        </aside>
      </main>
    </section>
  );
};

export default ChooseUs;
