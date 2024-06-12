import React, { useState } from "react";
import { useVehicleState } from "../../Context/VehicleContext";

const VehicleModel = ({ refs }) => {
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [isSelected, setIsSelected] = useState("");

  const { vehicleModels } = useVehicleState();

  return (
    <section>
      <div className="flex flex-col items-center text-center font-rubik text-Gbay-950">
        <h3 className="text-2xl font-bold mb-3">Vehicle Models</h3>
        <h1 className="lg:text-5xl text-4xl font-extrabold tracking-wider mb-3">
          Our Rental Fleet
        </h1>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 items-start my-20">
        <section className="w-full h-full flex flex-col items-center lg:w-1/4 gap-3">
          {vehicleModels.map((car, index) => (
            <button
              key={index}
              onClick={() => {
                setIsSelected(index);
              }}
              className={`${
                isSelected == index
                  ? "bg-Gbay-700 text-Gbay-50"
                  : "bg-Gbay-200 text-Gbay-950"
              } w-full text-center lg:text-left lg:text-xl tracking-wide px-6 py-2 lg:py-4 font-bold hover:bg-Gbay-700 hover:text-Gbay-50 border-Gbay-400 rounded transition-all duration-200 ease-in-out`}
            >
              {car.company} {car.model}
            </button>
          ))}
        </section>
        {vehicleModels.map((car, index) => (
          <div
            key={index}
            className={`${
              isSelected == index
                ? "lg:w-1/2 w-[18.5rem] h-56 lg:h-[26rem] bottom-0 relative"
                : "hidden"
            }`}
          >
            <img
              src={car.imgUrl}
              alt=""
              className="absolute bottom-0 aspect-auto w-full"
            />
          </div>
        ))}
        {vehicleModels.map((car, index) => (
          <div
            key={index}
            className={`${
              isSelected == index ? "block w-full lg:w-1/4 " : "hidden"
            }`}
          >
            <table className="w-full lg:text-md text-sm font-poppins h-full flex flex-col border-2 border-Gbay-700 mb-3">
              <tbody>
                <tr className="flex gap-3 items-center justify-center bg-Gbay-700 text-Gbay-50 border-b-2 border-Gbay-700 px-6 py-2">
                  <td className="lg:text-2xl text-xl font-bold">
                    ₹ {car.pricePerDay}{" "}
                  </td>
                  <td className="font-semibold">/ rent per day</td>
                </tr>
                <tr className="flex justify-between border-b-2 border-Gbay-700 px-6 py-4">
                  <td className="border-r-2 w-1/2 border-Gbay-700">Company</td>
                  <td>{car.company}</td>
                </tr>
                <tr className="flex justify-between border-b-2 border-Gbay-700 px-6 py-4">
                  <td className="border-r-2 w-1/2 border-Gbay-700">Model</td>
                  <td>{car.model}</td>
                </tr>
                <tr className="flex justify-between border-b-2 border-Gbay-700 px-6 py-4">
                  <td className="border-r-2 w-1/2 border-Gbay-700">
                    Fuel Type
                  </td>
                  <td>{car.fuelType}</td>
                </tr>
                <tr className="flex justify-between border-b-2 border-Gbay-700 px-6 py-4">
                  <td className="border-r-2 w-1/2 border-Gbay-700">
                    {" "}
                    Transmission
                  </td>
                  <td>{car.transmissionType}</td>
                </tr>
                <tr className="flex justify-between px-6 py-4">
                  <td className="border-r-2 w-1/2 border-Gbay-700">
                    AC/ Non-AC
                  </td>
                  <td>{car.isAc}</td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => {
                scrollToSection(refs.bookTripRef);
              }}
              className="w-full text-center active:shadow-none active:bg-Gbay-500 active:translate-x-[5px] active:translate-y-[5px]  transition-all duration-100 ease-in-out text-xl tracking-widest px-6 py-3 font-bold bg-Gbay-700 text-Gbay-50 border-Gbay-400 rounded shadow-[5px_5px_0px_#aca5fc]"
            >
              Reserve Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VehicleModel;
