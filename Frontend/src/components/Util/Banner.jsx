import React from "react";


const Banner = ({ PageTitle }) => {
  return (
    <div className="text-Gbay-950 font-semibold font-rubik bg-Gbay-50 bg-opacity-30">
      <img
        src="/static/gWagon.jpg"
        alt=""
        className="relative opacity-50 mix-blend-multiply"
      />
      <div className="top-40 text-lg absolute mx-40 flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-wider">{PageTitle}</h1>
        <h4><a href="/" className="hover:text-Gbay-700">Home</a> / {PageTitle}</h4>
      </div>
    </div>
  );
};

export default Banner;
