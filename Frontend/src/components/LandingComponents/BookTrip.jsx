import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import Button from "../Util/Button";

const BookTrip = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupDate, setPickupDate] = useState(new Date());
  const [dropDate, setDropDate] = useState(new Date());
  const [car, setCar] = useState("");
  return (
    <section className="w-full font-poppins py-10 my-10 shadow-[0_10px_15px_0_rgba(54,44,166,0.5)] rounded-lg container-concentric z-[99999999]">
      <label htmlFor="bookRide" className="px-10 text-xl font-bold">
        Book a Ride
      </label>
      <form
        id="bookRide"
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-3 grid-rows-2 gap-8 p-10"
      >
        {/* Car Select  */}
        <div className="h-20 gap-2 flex flex-col items-start justify-center col-span-1">
          <label
            htmlFor="carSelect"
            className="font-bold tracking-wide flex gap-4 items-center text-Fray-500"
          >
            <FaCar />
            Select a Car
          </label>
          <select
            name="carSelect"
            id="carSelect"
            className="p-2 h-full w-full rounded border-2 outline-none border-Gbay-700"
            defaultValue={"Default"}
            onChange={(e) => setCar(e.target.value)}
          >
            <option hidden value="Default">
              Select A Car
            </option>
            <option value="tiago">Tata Tiago</option>
            <option value="scorpio">Mahindra Scorpio</option>
            <option value="fortuner">Totyota Fortuner</option>
            <option value="bmw">BMW</option>
            <option value="hondaCity">Honda City</option>
          </select>
        </div>

        {/* Pick-Up Location Select  */}
        <div className="h-20 gap-2 flex flex-col items-start justify-center col-span-1">
          <label
            htmlFor="pickLocationSelect"
            className="font-bold tracking-wide flex gap-4 items-center text-Fray-500"
          >
            <FaLocationDot />
            Pick-Up Point
          </label>
          <select
            name="pickLocationSelect"
            id="pickLocationSelect"
            className="p-2 h-full w-full rounded border-2 outline-none border-Gbay-700"
            defaultValue={"Default"}
            onChange={(e) => setPickupLocation(e.target.value)}
          >
            <option hidden value="Default">
              Select a Location
            </option>
            <option value="chitra">Chitra</option>
            <option value="burnpur">Burnpur</option>
            <option value="bnr">Bhagat Singh Chowk</option>
            <option value="newTown">New Town</option>
            <option value="asansol">Asansol Bus Stand</option>
          </select>
        </div>

        {/* Drop-In location select  */}
        <div className="h-20 gap-2 flex flex-col items-start justify-center col-span-1">
          <label
            htmlFor="dropLocationSelect"
            className="font-bold tracking-wide flex gap-4 items-center text-Fray-500"
          >
            <FaLocationDot />
            Pick-Up Point
          </label>
          <select
            name="dropLocationSelect"
            id="dropLocationSelect"
            className="p-2 h-full w-full rounded border-2 outline-none border-Gbay-700"
            defaultValue={"Default"}
            onChange={(e) => setDropLocation(e.target.value)}
          >
            <option hidden value="Default">
              Select a Location
            </option>
            <option value="chitra">Chitra</option>
            <option value="burnpur">Burnpur</option>
            <option value="bnr">Bhagat Singh Chowk</option>
            <option value="newTown">New Town</option>
            <option value="asansol">Asansol Bus Stand</option>
          </select>
        </div>

        {/* Pick-Up date Input  */}
        <div className="h-20 gap-2 flex flex-col items-start justify-center col-span-1">
          <label
            htmlFor="pickDate"
            className="font-bold tracking-wide flex gap-4 items-center text-Fray-500"
          >
            <MdDateRange />
            Pick-Up Date
          </label>
          <input
            type="date"
            id="pickDate"
            className="p-2 h-full w-full rounded border-2 outline-none border-Gbay-700"
            onChange={handlePickupDate}
          />
        </div>

        {/* Drop-in date input  */}
        <div className="h-20 gap-2 flex flex-col items-start justify-center col-span-1">
          <label
            htmlFor="dropDate"
            className="font-bold tracking-wide flex gap-4 items-center text-Fray-500"
          >
            <MdDateRange />
            Drop-In Date
          </label>
          <input
            type="date"
            id="dropDate"
            className="p-2 h-full w-full rounded border-2 outline-none border-Gbay-700"
            value={dropDate}
            onChange={(e) => setDropDate(new Date(e.target.value))}
          />
        </div>
        <div className="h-20 gap-2 flex flex-col items-start justify-end col-span-1">
          <Button title="Search" />
        </div>
      </form>
    </section>
  );
};

export default BookTrip;
