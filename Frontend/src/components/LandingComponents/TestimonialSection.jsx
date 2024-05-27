import React from "react";
import { IoManSharp } from "react-icons/io5";

const TestimonialSection = () => {
  return (
    <section className="font-poppins z-50 py-20 h-fit flex flex-col items-center">
      <aside className="space-y-4 text-center mx-64">
        <h3 className="text-2xl font-bold font-rubik">Reviewed by People</h3>
        <h1 className="text-5xl font-bold font-rubik">Client's Testimonials</h1>
        <p>
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </aside>
      <main className="flex gap-20 mx-4">
        {/* review Card  */}
        <div className="container-concentric bg-Gbay-50 flex justify-between flex-col text-justify w-1/2 shadow-[0_10px_15px_0_rgba(54,44,166,0.5)] rounded p-14 mt-10 space-y-6">
          <h3 className="text-2xl font-semibold mb-4">
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "
          </h3>
          <div className="font-rubik flex items-center gap-3">
            <IoManSharp size={30} />
            <span>
              <h4 className="text-xl font-semibold">Motilal Gandhi</h4>
              <h6>Chitra</h6>
            </span>
          </div>
        </div>

        {/* review Card  */}
        <div className="container-concentric bg-Gbay-50 flex justify-between flex-col text-justify w-1/2 shadow-[0_10px_15px_0_rgba(54,44,166,0.5)] rounded p-14 mt-10">
          <h3 className="text-2xl font-semibold mb-4">
            "The car was in great condition and made our trip even better.
            Highly recommend for this car rental website!"
          </h3>
          <div className="font-rubik flex items-center gap-3">
            <IoManSharp size={30} />
            <span>
              <h4 className="text-xl font-semibold">Rahu Ketu</h4>
              <h6>New Town</h6>
            </span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TestimonialSection;
