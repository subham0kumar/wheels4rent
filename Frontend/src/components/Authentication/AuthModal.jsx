import React from "react";
import { LuCross } from "react-icons/lu";
import { useAuth } from "../../Context/AuthContext";
import Login from "./Login";
import Signup from "./Signup";

const AuthModal = () => {
  const { openModal, setOpenModal, loginToggle, setLoginToggle, error, setError } = useAuth();
  return (
    <>
      {openModal ? (
        <div className="bg-Gbay-500 z-30 shadow-modal w-1/2 rounded-xl absolute top-24 left-1/2 -translate-x-1/2 ">
          <span className="flex items-center justify-center">
            <span className="flex w-full items-center justify-around text-xl font-semibold">
              <button
                className={`${
                  loginToggle
                    ? "bg-Gbay-100 text-Gbay-950"
                    : "bg-Gbay-500 text-Gbay-50"
                } border-r-2 border-Gbay-100 py-2 w-full h-full rounded-tl-xl`}
                onClick={() => setLoginToggle(true)}
              >
                Log In
              </button>
              <button
                className={`${
                  !loginToggle
                    ? "bg-Gbay-100 text-Gbay-950"
                    : "bg-Gbay-500 text-Gbay-50"
                } border-r-2 border-Gbay-100 py-2 w-full h-full`}
                onClick={() => setLoginToggle(false)}
              >
                Sign up
              </button>
            </span>
            <LuCross
              className="rotate-45 mx-2 hover:text-Gbay-50 cursor-pointer text-Gbay-950"
              onClick={() => setOpenModal(false)}
              size={30}
            />
          </span>
          <div
            className={`py-3 px-12 text-lg text-Gbay-100 bg-[#e71f1f] bg-opacity-75
        ${error ? "" : "hidden"}`}
          >
            <h3>{error}</h3>
          </div>
          {loginToggle ? <Login /> : <Signup />}
        </div>
      ) : null}
    </>
  );
};

export default AuthModal;
