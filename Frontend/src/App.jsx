import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import VehicleModelsPage from "./pages/VehicleModelsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="bg-Gbay-50">
      <Navbar />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/models" Component={VehicleModelsPage} />
        <Route path="/testimonials" Component={TestimonialsPage} />
        <Route path="/team" Component={OurTeam} />
        <Route path="/contact" Component={ContactUs} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
