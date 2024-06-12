import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import Banner from "../components/Util/Banner";
import Button from "../components/Util/Button";
import ContactBanner from "../components/Util/ContactBanner";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setShowConfirm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setShowConfirm(false);
      setEmail("");
      setName("");
      setMessage("");
    }, 2000);
  };
  return (
    <div>
      <Banner PageTitle={"Contact Us"} />
      <div
        className={`flex flex-col lg:flex-row justify-center gap-2 py-3 px-10 text-xl font-semibold text-Gbay-950 bg-Gbay-200 bg-opacity-75 mb-2
        ${showConfirm ? "" : "hidden"}`}
      >
        Thanks <h4 className="text-Gbay-500"> {name} </h4> for contacting us
      </div>
      <img
        src="/static/worldBG.png"
        alt="worldBG"
        width={1300}
        className="lg:block hidden opacity-10 absolute left-32 top-[25rem]"
      />
      <main
        // style={{ backgroundImage: `url(${WorldBG})` }}
        className="relative bg-center bg-cover bg-no-repeat font-poppins grid lg:grid-cols-2 lg:gap-20 lg:px-40 py-10 lg:py-20"
      >
        {/* <div className="h-full w-full bg-[#0e0b3a5e] absolute right-0 top-0"></div> */}
        <aside className="flex flex-col space-y-6 z-10 px-8">
          <h1 className="font-rubik text-4xl lg:text-5xl font-bold">
            Need additional information?
          </h1>
          <h5 className="text-left">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </h5>
          <div className="text-lg font-semibold tracking-wide font-rubik">
            <h3 className="hover:text-Gbay-700 hover:cursor-pointer flex items-center gap-6 mb-3">
              <FaPhone /> (+91)-123-456-7890
            </h3>
            <h3 className="hover:text-Gbay-700 hover:cursor-pointer flex items-center gap-6 mb-3">
              <MdEmail />
              wheels4rent@gmail.com
            </h3>
            <h3 className="hover:text-Gbay-700 hover:cursor-pointer flex items-center gap-6 mb-3">
              <FaLocationArrow />
              West Bengal, India
            </h3>
          </div>
        </aside>
        <aside className="z-10 lg:mt-0 mt-20">
          <form className="space-y-4" onSubmit={handleForm}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="lg:px-0 px-8 font-bold text-lg">
                Full Name <b className="text-Gbay-700 font-bold text-xl">*</b>
              </label>
              <input
                type="text"
                id="name"
                placeholder="E.g. Jaun Dough"
                className="lg:w-full w-72 mx-8 lg:mx-0 outline-none h-12 px-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="lg:px-0 px-8 font-bold text-lg">
                E-mail <b className="text-Gbay-700 font-bold text-xl">*</b>
              </label>
              <input
                type="email"
                id="email"
                placeholder="youremail@example.com"
                className="lg:w-full w-72 mx-8 lg:mx-0 outline-none h-12 px-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="lg:px-0 px-8 font-bold text-lg"
              >
                Your message{" "}
                <b className="text-Gbay-700 font-bold text-xl">*</b>
              </label>
              <textarea
                type="textarea"
                id="message"
                placeholder="Your message here.."
                className="lg:w-full w-72 mx-8 lg:mx-0 outline-none h-32 px-4 py-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="px-8 lg:px-0 pt-4">
              <Button
                title={
                  <div className="flex gap-3 items-center justify-center">
                    <HiOutlineMailOpen size={20} /> Send Message{" "}
                  </div>
                }
              />
            </div>
          </form>
        </aside>
      </main>
      <ContactBanner />
    </div>
  );
};

export default ContactUs;
