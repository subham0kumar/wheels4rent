import React, { useId, useState } from "react";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import Button from "../Util/Button";
import ReserveRideModal from "../Util/ReserveRideModal";

const BookTrip = React.forwardRef((props, ref) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [car, setCar] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formDetails, setFormDetails] = useState({
    from: "Chitra",
    to: "New Town",
    pickOn: "",
    dropOn: "",
    car: "Tiago",
  });

  const handleInput = () => {
    setFormDetails({
      from: pickupLocation,
      to: dropLocation,
      pickOn: pickupDate,
      dropOn: dropDate,
      car: car,
    });
    setPickupLocation("");
    setDropLocation("");
    setPickupDate("");
    setDropDate("");
    setCar("");
  };
  const handleBookTrip = (e) => {
    e.preventDefault();
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    handleInput();
    setShowModal(true);
  };

  if (showModal) {
    document.body.classList.add("lg:overflow-y-hidden");
  } else {
    document.body.classList.remove("lg:overflow-y-hidden");
  }

  return (
    <section
      ref={ref}
      className="w-full font-poppins py-6 my-10 shadow-[0_10px_15px_0_rgba(54,44,166,0.5)] rounded-lg container-concentric z-30"
    >
      <ReserveRideModal
        open={showModal}
        handleOpen={setShowModal}
        rideDetails={formDetails}
      />
      <label htmlFor="bookRide" className="px-10 text-xl font-bold">
        Book a Ride
      </label>
      <form
        id="bookRide"
        onSubmit={handleBookTrip}
        className="grid lg:grid-cols-3 gap-8 px-10 py-8"
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
            required
            name="carSelect"
            id="carSelect"
            className="p-2 h-full w-full rounded border-2 outline-none border-Gbay-700"
            value={car}
            onChange={(e) => setCar(e.target.value)}
          >
            <option hidden value="">
              Select A Car
            </option>
            <option value="Tiago">Tata Tiago</option>
            <option value="Scorpio">Mahindra Scorpio</option>
            <option value="Fortuner">Totyota Fortuner</option>
            <option value="M340i">BMW</option>
            <option value="City">Honda City</option>
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
            required
            name="pickLocationSelect"
            id="pickLocationSelect"
            className="p-2 h-full w-full rounded border-2 outline-none border-Gbay-700"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          >
            <option hidden value="">
              Select a Location
            </option>
            <option value="Chitra">Chitra</option>
            <option value="Burnpur">Burnpur</option>
            <option value="Bhagat Singh Chowk">Bhagat Singh Chowk</option>
            <option value="New Town">New Town</option>
            <option value="Asansol">Asansol Bus Stand</option>
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
            required
            name="dropLocationSelect"
            id="dropLocationSelect"
            className="p-2 h-full w-full rounded border-2 outline-none border-Gbay-700"
            value={dropLocation}
            onChange={(e) => setDropLocation(e.target.value)}
          >
            <option hidden value="">
              Select a Location
            </option>
            <option value="Chitra">Chitra</option>
            <option value="Burnpur">Burnpur</option>
            <option value="Bhagat Singh Chowk">Bhagat Singh Chowk</option>
            <option value="New Town">New Town</option>
            <option value="Asansol">Asansol Bus Stand</option>
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
            required
            type="date"
            id="pickDate"
            className="p-2 h-full w-full rounded border-2 outline-none border-Gbay-700"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
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
            required
            type="date"
            id="dropDate"
            className="p-2 h-full w-full rounded border-2 outline-none border-Gbay-700"
            value={dropDate}
            onChange={(e) => {
              setDropDate(e.target.value);
            }}
          />
          {/* {console.log(
            `from: ${pickupLocation}, to: ${dropLocation}, pickOn: ${pickupDate}, dropOn: ${dropDate}, in: ${car}`
          )} */}
        </div>
        <div className="h-20 gap-2 flex flex-col items-start justify-end col-span-1">
          <Button title="Search" />
        </div>
      </form>
    </section>
  );
});

export default BookTrip;
