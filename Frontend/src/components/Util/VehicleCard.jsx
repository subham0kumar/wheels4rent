import React from "react";
import Stars from "./Stars";
import { MdAir } from "react-icons/md";
import { GiGearStick } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { BiSolidCoin } from "react-icons/bi";
import Button from "./Button";

const VehicleCard = ({ vehicle }) => {
  return (
    <>
      <div className="font-poppins lg:w-[25vw] rounded-md border-Gbay-300 border-2 p-6 m-4">
        <div className="relative h-44 lg:h-[15rem]">
          <img
            src={vehicle.imgUrl}
            alt="vehicle Image"
            className="bottom-0 absolute pb-2"
          />
        </div>
        <div className="border-b-2 border-Gbay-300 mb-4">
          <header className="flex justify-between">
            <span>
              <h1 className="font-rubik mb-2 text-3xl font-bold">
                {vehicle.model}
              </h1>
              <div>
                <Stars star={vehicle.stars} />
              </div>
            </span>
            <span>
              <h1 className="font-rubik mb-2 text-3xl font-bold">
                ₹{vehicle.pricePerDay}
              </h1>
              <h5 className=" text-right">per day</h5>
            </span>
          </header>
          <main className="flex justify-between my-4">
            <div className="my-3 space-y-3">
              <span className="flex items-center gap-3">
                <BiSolidCoin size={20} />
                {vehicle.company}
              </span>
              <span className="flex items-center gap-3">
                <GiGearStick size={20} />
                {vehicle.transmissionType}
              </span>
            </div>
            <div className="my-3 space-y-3">
              <span className="flex items-center gap-3">
                <BsFillFuelPumpFill size={20} />
                {vehicle.fuelType}
              </span>
              <span className="flex items-center gap-3">
                <MdAir size={20} />
                AC - {vehicle.isAc}
              </span>
            </div>
          </main>
        </div>
        <Button title={"Book Now"} />
      </div>
    </>
  );
};

export default VehicleCard;
