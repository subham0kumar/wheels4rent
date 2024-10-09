import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer2 from "./components/Footer2";
import Navbar from "./components/Navbar";
import { PreloadImages } from "./components/Util/ImagePreloader";
import TruckLoader from "./components/Util/Loader/TruckLoader";
import ScrollToTop from "./components/Util/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
import OurTeam from "./pages/OurTeam";
import TestimonialsPage from "./pages/TestimonialsPage";
import VehicleModelsPage from "./pages/VehicleModelsPage";

function App() {
  const [loading, setLoading] = useState(true);
  const imageUrls = [
    "/static/creta.png",
    "/static/fortuner.png",
    "/static/scorpio.png",
    "/static/honada-city.png",
    "/static/tata-tiago-white.png",
    "/static/bmw-sedan.png",
    "/static/people/Nitish.png",
    "/static/people/Shubhangi.png",
    "/static/people/Monica.png",
    "/static/people/Sheela.png",
    "/static/people/Sachin.png",
    "/static/people/Rahul.png",
    "/static/tiago-blue.png",
    "/static/GroupOfCars.png",
    "/static/sapiens.png",
    "/static/Icons/garage-house.png",
    "/static/gWagon.jpg",
    "/static/worldBG.png",
  ];

  useEffect(() => {
    let timer1 = setTimeout(async () => {
      try {
        await PreloadImages(imageUrls);
        setLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setLoading(false);
      }
    }, 1500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  // console.log(import.meta.env.VITE_FIREBASE_API_KEY)

  return (
    <>
      {" "}
      {loading ? (
        <TruckLoader />
      ) : (
        <div className="bg-Gbay-50 text-Gbay-950">
          <Navbar />
          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/models" Component={VehicleModelsPage} />
            <Route path="/testimonials" Component={TestimonialsPage} />
            <Route path="/team" Component={OurTeam} />
            <Route path="/contact" Component={ContactUs} />
          </Routes>
          <ScrollToTop />
          <Footer2 />
        </div>
      )}
    </>
  );
}

export default App;
