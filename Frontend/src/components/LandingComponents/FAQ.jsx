import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";

const FAQ = () => {
  const [rotate, setRotate] = useState(false);
  const [open, setOpen] = useState(null);
  const toggle = (i) => {
    if (open === i) {
      return setOpen(null);
    }
    setOpen(i);
  };
  const freqAnsQues = [
    {
      qNo: 1,
      ques: "What is special about comparing rental car deals?",
      ans: "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
    },
    {
      qNo: 2,
      ques: "How do I find the car rental deals?",
      ans: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
    },
    {
      qNo: 3,
      ques: "How do I find such low rental car prices?",
      ans: "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
    },
  ];
  return (
    <div className="spikes py-20">
      <div className="font-poppins flex flex-col w-full items-start justify-center px-80">
        <aside className="text-center space-y-6 flex flex-col items-center">
          <h3 className="text-2xl font-bold font-rubik">FAQ</h3>
          <h1 className="text-5xl font-bold font-rubik">
            Frequently Asked Questions
          </h1>
          <p>
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </aside>
        <main className="shadow-[0_10px_15px_0_rgba(54,44,166,0.5)] w-full flex flex-col items-center mt-10">
          {freqAnsQues.map((que, index) => (
            <div key = {index} className="w-full">
              <button
                className={`${
                  open == index
                    ? "bg-Gbay-600 text-Gbay-50 shadow-[0_10px_15px_0_rgba(54,44,166,0.5)]"
                    : "border-b-2 border-Gbay-200"
                }  text-xl flex items-center justify-between w-full px-8 py-6 text-left font-semibold `}
                onClick={() => {
                  toggle(index);
                  setRotate(!rotate);
                }}
              >
                {que.qNo}. {que.ques}
                <FaAngleDown className={`${rotate ? "rotate-180" : ""}`} />
              </button>
              <Collapse isOpened={open == index ? true : false}>
                <div className="py-4 px-10 text-justify">{que.ans}</div>
              </Collapse>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default FAQ;
