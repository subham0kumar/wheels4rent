import React from "react";

const HeroSection = () => {
  return (
    <div className="font-rubik py-32 text-right flex items-center">
      <img
        src="src/static/tiago-blue.png"
        alt="tiago"
        width={700}
        className="z-20"
      />
      <div className="space-y-6">
        <h4 className="text-2xl font-bold">Plan your trip now</h4>
        <h1 className="text-6xl font-semibold">
          Save <span className="text-Gbay-500">BIG</span> with out car rentals
        </h1>
        <p>
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <span className="font-poppins gap-8 flex justify-end mt-10">
          <button className="transition-all duration-100 ease-in-out shadow-[5px_5px_0_rgba(54,44,166,0.5)] bg-Gbay-600 px-8 py-4 text-Gbay-50 rounded font-semibold active:translate-y-1 active:translate-x-1 active:shadow-none">
            Book Now ⇗
          </button>
          <button className="transition-all duration-100 ease-in-out shadow-[5px_5px_0_rgba(54,44,166,0.5)] border-2 border-Gbay-950 bg-Gbay-950 text-Gbay-50 hover:bg-Gbay-50 hover:text-Gbay-950 px-8 py-4 rounded font-semibold active:translate-y-1 active:translate-x-1 active:shadow-none">
            Learn More »
          </button>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
