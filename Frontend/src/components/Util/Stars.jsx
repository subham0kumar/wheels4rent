import React from "react";
// import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { PiStarBold, PiStarHalfDuotone, PiStarDuotone } from "react-icons/pi";

const Stars = ({ star }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span className="flex" key={index}>
        {star >= index + 1 ? (
          <PiStarDuotone color="gold" size={20} />
        ) : star >= number ? (
          <PiStarHalfDuotone color="gold" size={20} />
        ) : (
          <PiStarBold color="gold" size={20} />
        )}
      </span>
    );
  });

  return (
    <div>
      <span className="flex">{ratingStar}</span>
    </div>
  );
};

export default Stars;
