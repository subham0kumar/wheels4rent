import React, { useState } from "react";
import { useVehicleState } from "../../Context/VehicleContext";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { LuCross } from "react-icons/lu";

const ReserveRideModal = ({ rideDetails, open, handleOpen }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const handleReserve = () => {
    handleOpen(false);
    setShowConfirm(true);
    setTimeout(() => {
      setShowConfirm(false);
    }, 2000);
  };
  const { vehicleModels } = useVehicleState();
  const carDeets = vehicleModels.filter((car) => car.model == rideDetails.car);
  return (
    <>
      <div
        className={`rounded-xl shadow-modal absolute top-14 left-4 lg:left-40 w-[92vw] lg:w-[80vw] bg-Gbay-100 z-40
            ${open ? "" : "hidden"}`}
      >
        <span className="rounded-t-lg flex justify-between items-center bg-Gbay-500 py-5 lg:px-10 px-5 text-2xl font-rubik font-bold text-textLight">
          <h1>Complete Reservation</h1>
          <button
            onClick={() => handleOpen(false)}
            className="rotate-45 hover:text-[#0aff00]"
          >
            <LuCross size={30} />
          </button>
        </span>
        <div className="flex items-center gap-2 justify-center p-3 bg-Gbay-50 w-full">
          <IoInformationCircle size={25} color="blue" />
          Please confirm your ride.
        </div>
        <main className="flex flex-col lg:flex-row lg:text-center justify-between py-4 px-5 lg:px-36 font-semibold lg:gap-0 gap-20">
          <aside className="flex flex-col gap-6">
            <h1 className="text-xl">Location and Date</h1>
            <span>
              <h3 className="text-lg flex items-center gap-2">
                {" "}
                <MdDateRange /> Pick Up Date
              </h3>
              <h3 className="text-lg text-Gbay-800">{rideDetails.from}</h3>
            </span>
            <span>
              <h3 className="text-lg flex items-center gap-2">
                {" "}
                <MdDateRange /> Drop off Date
              </h3>
              <h3 className="text-lg text-Gbay-800">{rideDetails.to}</h3>
            </span>
            <span>
              <h3 className="text-lg flex items-center gap-2">
                {" "}
                <FaLocationDot /> Pick up location
              </h3>
              <h3 className="text-lg text-Gbay-800">{rideDetails.pickOn}</h3>
            </span>
            <span>
              <h3 className="text-lg flex items-center gap-2">
                {" "}
                <FaLocationDot /> Drop off location
              </h3>
              <h3 className="text-lg text-Gbay-800">{rideDetails.dropOn}</h3>
            </span>
          </aside>
          <aside>
            <h3 className="text-xl flex items-center gap-2 justify-center">
              {" "}
              <FaCar /> Car Name
            </h3>
            <h1 className="text-lg text-Gbay-800">
              {carDeets[0].company} {carDeets[0].model}
            </h1>
            <img src={carDeets[0].imgUrl} alt="car" width={500} />
          </aside>
        </main>
        <span className="rounded-b-lg flex justify-end items-center bg-Gbay-500 py-5 px-10 text-2xl font-rubik font-bold text-textLight">
          <button
            className="transition-all duration-100 ease-in-out shadow-[5px_5px_0_0_rgba(54,44,166,0.5)] bg-Gbay-600 px-6 py-2 text-Gbay-50 rounded font-semibold active:translate-y-1 active:translate-x-1 active:shadow-none"
            onClick={handleReserve}
          >
            Reserve Now
          </button>
        </span>
      </div>
      <div
        className={`py-3 px-10 text-lg bg-Gbay-200 bg-opacity-75 mb-2
        ${showConfirm ? "" : "hidden"}`}
      >
        Your {carDeets[0].company} {carDeets[0].model} has been scheduled for{" "}
        {rideDetails.pickOn}
      </div>
    </>
  );
};

export default ReserveRideModal;
