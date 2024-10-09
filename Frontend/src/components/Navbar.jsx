import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import carIcon from "/static/Icons/car-2.png";

const Navbar = () => {
  const {
    openModal,
    setOpenModal,
    setLoginToggle,
    setAlert,
    currentUser,
    logout,
    handleAlert,
  } = useAuth();
  const [showNav, setShowNav] = useState(false);
  const [loading, setLoading] = useState();
  const handleLogout = async (e) => {
    e.preventDefault();
    handleAlert();

    try {
      setAlert({ type: "", message: "" });
      await logout();
      setLoading(true);
    } catch (error) {
      setAlert({ type: "error", message: "Sign Out Failed!" + error });
    }
    setLoading(false);
  };
  const navbarList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Vehicle Models",
      link: "/models",
    },
    {
      name: "Testimonials",
      link: "/testimonials",
    },
    {
      name: "Our Team",
      link: "/team",
    },
  ];

  if (showNav) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  const linkStyle =
    "bg-gradient-to-r from-Gbay-700 to-Gbay-700 px-1 text-950 underAnimate";
  return (
    <nav className="text-Gbay-950 font-semibold absolute top-0 left-0 right-0 px-5 lg:px-40 w-full z-20 font-rubik flex items-center justify-between lg:py-8 py-4 bg-[#ffffff00] backdrop-blur-sm">
      <section className="left-section">
        <Link to={"/"}>
          <img src={carIcon} alt="" width={100} />
        </Link>
      </section>
      <button
        className="lg:hidden border rounded text-Gbay-700 p-1"
        onClick={() => setShowNav(true)}
      >
        <RxHamburgerMenu size={30} />
      </button>

      {/* <======================= Mobile Navbaar =====================> */}
      <div
        className={`w-screen left-0 top-0 fixed p-6 flex-col items-center justify-start gap-10 h-screen bg-Gbay-100 z-20 transition-all duration-300 ease-in-out ${
          showNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex flex-row-reverse">
          <button className="text-Gbay-700" onClick={() => setShowNav(false)}>
            <IoCloseCircleOutline size={45} />
          </button>
        </div>
        <div className="flex items-center justify-center h-[75vh]">
          <ul className="text-Gbay-900 flex flex-col gap-10 text-xl lg:text-3xl items-center">
            {navbarList.map((item, index) => (
              <li key={index} className="hover:underline underline-offset-4">
                <Link to={item.link} onClick={() => setShowNav(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <======================= Default Navbaar =====================> */}
      <section className="lg:block hidden middle-section">
        <ul className="flex gap-10">
          {navbarList.map((item, index) => (
            <li key={index} className={linkStyle}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      {!currentUser ? (
        <section className="lg:flex hidden right-section gap-4">
          <button
            onClick={() => {
              setOpenModal(!openModal);
              setLoginToggle(true);
            }}
            className="transition-all duration-100 ease-in-out shadow-[5px_5px_0_rgba(54,44,166,0.5)] border-2 border-Gbay-950 bg-Gbay-50 text-Gbay-950 hover:bg-Gbay-950 hover:text-Gbay-50 px-6 rounded font-semibold active:translate-y-1 active:translate-x-1 active:shadow-none"
          >
            Sign in
          </button>
          <button
            onClick={() => {
              setOpenModal(!openModal);
              setLoginToggle(false);
            }}
            className="border-2 transition-all duration-100 ease-in-out shadow-[5px_5px_0_rgba(54,44,166,0.5)] hover:shadow-[5px_5px_0_rgba(54,44,166,0.5)] bg-Gbay-600 px-6 py-2 text-Gbay-50 rounded font-semibold active:translate-y-1 active:translate-x-1 active:shadow-none"
          >
            Register
          </button>
        </section>
      ) : (
        <>
          <h3> User Loged In</h3>
          <button
            onClick={handleLogout}
            className="border-2 transition-all duration-100 ease-in-out shadow-[5px_5px_0_rgba(54,44,166,0.5)] hover:shadow-[5px_5px_0_rgba(54,44,166,0.5)] bg-Gbay-600 px-4 py-2 text-Gbay-50 rounded-full font-semibold active:translate-y-1 active:translate-x-1 active:shadow-none"
          >
            U
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
