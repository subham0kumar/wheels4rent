import React from "react";

const PersonCard = ({ employ }) => {
  return (
    <div className="p-4 m-4 flex flex-col items-center justify-end font-poppins lg:w-[20vw] rounded-md border-Gbay-300 border-2 text-center">
      <div className="border-b-2 mb-4 border-Gbay-300 rounded">
        <img src={employ.displayImg} alt="DP" width={250} />
      </div>
      <h1 className="font-rubik mb-2 text-3xl font-bold">{employ.name}</h1>
      <h3>{employ.designation}</h3>
    </div>
  );
};

export default PersonCard;
