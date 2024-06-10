import React from "react";
import { useVehicleState } from "../../Context/VehicleContext";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

const ReserveRideModal = ({ rideDetails, open, handleOpen }) => {
  const handleReserve = () => {
    handleOpen(false)
  };
  const { vehicleModels } = useVehicleState();
  const carDeets = vehicleModels.filter((car) => car.model == rideDetails.car);
  return (
    <div
      className={`shadow-modal absolute top-10 left-40 w-[80vw] border-2 bg-Gbay-100 z-40
          ${open ? "" : "hidden"}`}
    >
      <span className="flex justify-between items-center bg-Gbay-500 p-5 text-2xl font-rubik font-bold text-textLight">
        <h1>Complete Reservation</h1>
        <button onClick={() => handleOpen(false)}>X</button>
      </span>
      <div className="flex items-center gap-2 justify-center p-3 bg-Gbay-50 w-full">
        <IoInformationCircle size={25} color="blue" />
        Please confirm your ride.
      </div>
      <main className="flex text-center justify-between py-4 px-36 font-semibold">
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
      <span className="flex justify-end items-center bg-Gbay-500 p-5 text-2xl font-rubik font-bold text-textLight">
        <button
          className="transition-all duration-100 ease-in-out shadow-[5px_5px_0_0_rgba(54,44,166,0.5)] bg-Gbay-600 px-8 py-4 text-Gbay-50 rounded font-semibold active:translate-y-1 active:translate-x-1 active:shadow-none"
          onClick={handleReserve}
        >
          Reserve Now
        </button>
      </span>
    </div>
  );
};

export default ReserveRideModal;
