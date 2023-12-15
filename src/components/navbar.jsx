import { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./button";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleclick = () => {
    setIsActive(!isActive);
  };

  const menuItem = [
    { label: "Home", href: "/home" },
    { label: "Feature", href: "/home" },
    { label: "How to Make", href: "/home" },
    { label: "contact", href: "/home" },
    { label: "Profile", href: "/home" },
  ];

  const [isMenuShow, setisMenuShow] = useState(false);

  return (
    <>
      <div className=" w-full font-roboto h-[80px] hidden md:flex justify-center items-center fixed top-0 left-0 right-0 z-50 bg-orange-700">
        <ul className="hidden md:flex space-x-6">
          {menuItem.map((res, i) => (
            <li key={i}>
              <a href={res.href} className="text-red-400 text-md font-bold">
                {res.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="h-[50px] w-[50px] bg-red-300 absolute right-0 top-0 m-6 block md:hidden z-[50]"
        onClick={() => setisMenuShow((prev) => !prev)}
      >
        burger
      </button>

      {/* {isMenuShow && ( */}
      <div
        className=" w-full font-roboto h-screen md:h-[80px] fixed top-0 left-0 right-0 z-[40] bg-red-700 transition-all"
        style={{
          left: isMenuShow ? 0 : "100vw",
        }}
      >
        <ul className="flex-col md:hidden h-full w-full">
          {menuItem.map((res, i) => (
            <li className="p-6 border-b" key={i}>
              <a href={res.href} className="text-amber-400 text-md font-bold">
                {res.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* )} */}
    </>
  );
}
