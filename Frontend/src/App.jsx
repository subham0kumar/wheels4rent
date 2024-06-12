import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer2 from "./components/Footer2";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
import OurTeam from "./pages/OurTeam";
import TestimonialsPage from "./pages/TestimonialsPage";
import VehicleModelsPage from "./pages/VehicleModelsPage";

function App() {
  return (
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
      {/* <Footer /> */}
      <Footer2 />
    </div>
  );
}

export default App;
