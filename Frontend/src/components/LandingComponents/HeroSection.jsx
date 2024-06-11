import React from "react";

const HeroSection = ({ refs }) => {
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="font-rubik py-[22vh] lg:py-32 text-right flex items-center">
      <img
        src="/static/tiago-blue.png"
        alt="tiago"
        width={700}
        className="lg:block hidden z-10"
      />
      <div className="space-y-6 text-center lg:text-right">
        <h4 className="text-2xl font-bold">Plan your trip now</h4>
        <h1 className="lg:text-6xl text-5xl font-semibold">
          Save <span className="text-Gbay-500">BIG</span> with our car rentals
        </h1>
        <p>
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <span className="font-poppins gap-8 flex lg:flex-row flex-col justify-end mx-10 mt-10">
          <button
            onClick={() => {
              scrollToSection(refs.bookTrip);
            }}
            className="transition-all duration-100 ease-in-out shadow-[5px_5px_0_rgba(54,44,166,0.5)] bg-Gbay-600 px-8 py-4 text-Gbay-50 rounded font-semibold active:translate-y-1 active:translate-x-1 active:shadow-none z-10"
          >
            Book Now ⇗
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.planSection);
            }}
            className="transition-all duration-100 ease-in-out shadow-[5px_5px_0_rgba(54,44,166,0.5)] border-2 border-Gbay-950 bg-Gbay-950 text-Gbay-50 hover:bg-Gbay-50 hover:text-Gbay-950 px-8 py-4 rounded font-semibold active:translate-y-1 active:translate-x-1 active:shadow-none z-10"
          >
            Learn More »
          </button>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
