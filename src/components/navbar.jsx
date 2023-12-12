import { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./button";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleclick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className=" w-full font-roboto bg-biru flex justify-center items-center relative z-50 ">
      <div className="container py-6 flex justify-between items-center border-b-2 px-10 lg:px-0 lg:justify-evenly">
        <img src={logo} alt="" className="w-[193.28px] h-[50px]" />
        <div className={`text-center flex justify-evenly items-center w-1/2 absolute top-0 right-0 -z-50 h-screen bg-biru lg:static lg:h-auto ${isActive ? "md:translate-x-0 max-md:translate-x-0 md:ease-out max-md:ease-out md:duration-300 max-md:duration-300" : "md:translate-x-full max-md:translate-x-full md:ease-in max-md:ease-in md:duration-300 max-md:duration-300"} lg:translate-x-0`}>
          <ul className={`text-white font-bold flex justify-between items-center w-full text-md  md:flex-col md:justify-center md:mt-10 md:gap-10 lg:flex-row max-md:flex-col h-full gap-16 mt-56 lg:mt-0 lg:text-sm`}>
            <li>
              <a href="#" className="text-orange-400 text-md font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">How to make</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            {isActive && (
              <li>
                <Button text="Download" />
              </li>
            )}
          </ul>
        </div>
        <div className="hidden lg:block">
          <Button text="Download" />
        </div>
        <div onClick={handleclick} className="hamburger menu h-[20px]  lg:hidden flex flex-col justify-between ">
          <span className={`w-[28px] h-[4px] block bg-white rounded-xl ${isActive ? "origin-top-left rotate-45 translate-x-1 -translate-y-[1px] duration-300 transition-all" : "ease-in-out duration-300"}`}></span>
          <span className={`w-[28px] h-[4px] block bg-white rounded-xl ${isActive ? "opacity-0" : "opacity-100 ease-in-out duration-300"}`}></span>
          <span className={`w-[28px] h-[4px] block bg-white rounded-xl ${isActive ? "origin-bottom-left -rotate-45 translate-x-1 translate-y-[1px] duration-300 transition-all" : "ease-in-out duration-300"}`}></span>
        </div>
      </div>
    </div>
  );
}
