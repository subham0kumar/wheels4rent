import React from "react";
import Gwagon from "/static/gWagon.jpg";

const Banner = ({ PageTitle }) => {
  return (
    <>
      <div className="h-[50vh] lg:h-[40vh]">
        <div
          style={{ backgroundImage: `url(${Gwagon})` }}
          className="bg-center bg-cover bg-no-repeat h-full"
        ></div>
        <div className="h-[50vh] lg:h-[40vh] w-full bg-[#efeeff99] absolute right-0 top-0"></div>
        <div className="top-40 text-lg absolute mx-6 lg:mx-40 flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-wider">{PageTitle}</h1>
          <h4 className="font-semibold">
            <a
              href="/"
              className="text-Gbay-800 hover:underline underline-offset-4"
            >
              Home
            </a>
            / {PageTitle}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Banner;
