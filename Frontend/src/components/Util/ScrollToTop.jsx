import React, { useState } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";

const ScrollToTop = () => {
  const [showPointer, setShowPointer] = useState(false);
  const handleScroll = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  const scrollToTheTop = () => {
    if (window.scrollY >= 200) {
      setShowPointer(true);
    } else {
      setShowPointer(false);
    }
  };
  window.addEventListener("scroll", scrollToTheTop);
  return (
    <div
      onClick={handleScroll}
      className={`${
        showPointer ? "translate-y-0" : "translate-y-32"
      } transition-all duration-300 ease-in-out cursor-pointer fixed h-11 w-11 bottom-10 right-4 lg:right-14 p-1 bg-Gbay-950 rounded-md z-50`}
    >
      <div className="-rotate-90 active:scale-90 h-full w-full flex items-center justify-center text-Gbay-50 bg-Gbay-500 rounded">
        <MdOutlineDoubleArrow size={25} />
      </div>
    </div>
  );
};

export default ScrollToTop;
