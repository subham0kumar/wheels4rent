import { createContext, useContext } from "react";

const vehicle = createContext();

const VehicleContext = ({ children }) => {
  const vehicleModels = [
    {
      id: 1,
      company: "BMW",
      model: "M340i",
      fuelType: "Petrol",
      transmissionType: "Automatic",
      isAc: "Yes",
      imgUrl: "src/static/bmw-sedan.png",
      pricePerDay: "2000",
      stars: 5,
    },
    {
      id: 2,
      company: "Tata",
      model: "Tiago",
      fuelType: "Petrol",
      transmissionType: "Manual",
      isAc: "No",
      imgUrl: "src/static/tata-tiago-white.png",
      pricePerDay: "1000",
      stars: 3,
    },
    {
      id: 3,
      company: "Honda",
      model: "City",
      fuelType: "Petrol",
      transmissionType: "Manual",
      isAc: "Yes",
      imgUrl: "src/static/honada-city.png",
      pricePerDay: "1200",
      stars: 3,
    },
    {
      id: 4,
      company: "Mahindra",
      model: "Scorpio",
      fuelType: "Deisel",
      transmissionType: "Manual",
      isAc: "Yes",
      imgUrl: "src/static/scorpio.png",
      pricePerDay: "1500",
      stars: 4.5,
    },
    {
      id: 5,
      company: "Toyota",
      model: "Fortuner",
      fuelType: "Petrol",
      transmissionType: "Manual",
      isAc: "Yes",
      imgUrl: "src/static/fortuner.png",
      pricePerDay: "1800",
      stars: 4,
    },
    {
      id: 6,
      company: "Hyundai",
      model: "Creta",
      fuelType: "Petrol",
      transmissionType: "Manual",
      isAc: "No",
      imgUrl: "src/static/creta.png",
      pricePerDay: "1000",
      stars: 3.5,
    },
  ];

  return (
    <vehicle.Provider value={{ vehicleModels }}>{children}</vehicle.Provider>
  );
};

export default VehicleContext;

export const useVehicleState = () => {
  return useContext(vehicle);
};
