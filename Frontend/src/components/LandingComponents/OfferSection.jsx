import React from "react";

const OfferSection = () => {
  return (
    <section className="z-50 text-center font-poppins relative flex flex-col items-center justify-center w-[98.95vw] left-[50%] lg:gap-10 -translate-x-[50%] py-4 lg:h-[35vh] bg-Gbay-950 mb-20 text-Gbay-50">
      <h1 className="text-lg lg:text-[4rem] font-bold">
        Save big with our cheap car rental!
      </h1>
      <h3 className="text-sm lg:text-[2rem] mt-4">
        Top Airports. Local Suppliers.{" "}
        <span className="text-Gbay-400 font-rubik">24/7</span> Support.
      </h3>
    </section>
  );
};

export default OfferSection;
