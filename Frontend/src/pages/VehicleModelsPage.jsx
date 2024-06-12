import React from "react";
import { useVehicleState } from "../Context/VehicleContext";
import Banner from "../components/Util/Banner";
import ContactBanner from "../components/Util/ContactBanner";
import VehicleCard from "../components/Util/VehicleCard";

const VehicleModelsPage = () => {
  const { vehicleModels } = useVehicleState();
  const data = vehicleModels.filter((product) => {
    return product.id >= 0;
  });

  return (
    <div>
      <Banner PageTitle={"Vehicle Models"} />
      <div className="grid lg:grid-cols-3 gap-6 my-20 lg:mb-40 lg:mx-40">
        {data.map((car, index) => (
          <VehicleCard key={index} vehicle={car} />
        ))}
      </div>
      <ContactBanner />
    </div>
  );
};

export default VehicleModelsPage;
