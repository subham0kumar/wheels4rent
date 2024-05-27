import React from "react";

const Button = ({title}) => {
  return (
    <button className="w-full transition-all duration-100 ease-in-out shadow-[5px_5px_0_0_rgba(54,44,166,0.5)] bg-Gbay-600 px-8 py-4 text-Gbay-50 rounded font-semibold active:translate-y-1 active:translate-x-1 active:shadow-none">
      {title}
    </button>
  );
};

export default Button;
