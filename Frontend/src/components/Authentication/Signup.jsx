import React, { useRef, useState } from "react";
import Button from "../Util/Button";
import { useAuth } from "../../Context/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup, setAlert, handleAlert } = useAuth();
  const [loading, setLoading] = useState(false);

  //Submit handle function
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleAlert();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setAlert({ type: "warn", message: "Passwords do not match!" });
    }

    try {
      setAlert({ type: "", message: "" });
      await signup(emailRef.current.value, passwordRef.current.value);
      setLoading(true);
    } catch (error) {
      setAlert({ type: "error", message: "Sign Up Failed!" + error });
    }
    setLoading(false);
    // setAlert({ type: "default", message: "Sign Up Successful!" });
  };

  const spanStyle =
    "h-20 p-6 flex flex-col items-start justify-center col-span-1";
  const inputStyle =
    "p-2 w-full rounded border-2 outline-none  border-Gbay-700";
  const lableStyle =
    "font-bold tracking-wide flex gap-4 items-center text-Fray-500";

  return (
    <form
      onSubmit={handleSubmit}
      id="login"
      className="p-5 rounded-b-xl bg-Gbay-100"
    >
      {/* <span className={spanStyle}>
        <label className={lableStyle} htmlFor="name">
          Full Name
        </label>
        <input ref={nameRef} className={inputStyle} type="text" id="name" />
      </span> */}
      <span className={spanStyle}>
        <label className={lableStyle} htmlFor="email">
          Email
        </label>
        <input ref={emailRef} className={inputStyle} type="email" id="email" />
      </span>
      <span className={spanStyle}>
        <label className={lableStyle} htmlFor="pswd">
          Password
        </label>
        <input
          ref={passwordRef}
          className={inputStyle}
          type="password"
          id="pswd"
        />
      </span>
      <span className={spanStyle}>
        <label className={lableStyle} htmlFor="cnfm-pswd">
          Confirm Password
        </label>
        <input
          ref={confirmPasswordRef}
          className={inputStyle}
          type="password"
          id="cnfm-pswd"
        />
      </span>
      <span className={spanStyle}>
        <Button isDisabled={loading} title="Sign up" />
      </span>
    </form>
  );
};

export default Signup;
