import { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./button";

export default function Navbar() {
  const [isMenuShow, setisMenuShow] = useState(false);

  const handleclick = () => {
    setisMenuShow(!isMenuShow);
  };

  const menuItem = [
    { label: "Home", href: "#home" },
    { label: "Feature", href: "#feature" },
    { label: "How to Make", href: "#howItWork" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className=" w-full font-roboto h-[80px] fixed top-0 left-0 right-0 z-50 px-6 bg-biru ">
        <div className="container h-full m-auto border-b flex justify-between items-center ">
          <div className="">
            <img src={logo} alt="" className="w-[142px] " />
          </div>
          <ul className="hidden md:flex space-x-6">
            {menuItem.map((res, i) => (
              <li key={i}>
                <a href={res.href} className="hover:text-orange-400 text-md text-slate-200">
                  {res.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <Button text={"Download"} />
          </div>
          {/* hamburger menu */}
          <div onClick={handleclick} className="w-[28px] h-[20px] flex flex-col justify-between items-center md:hidden">
            <span className={`block w-full h-1 bg-white rounded transition-all duration-300 ease-in-out ${isMenuShow ? "origin-top-left bg-black rotate-45 translate-x-[1px] -translate-y-[1px]" : ""}`} />
            <span className={`block w-full h-1 bg-white rounded transition-all duration-300 ease-in-out ${isMenuShow ? "opacity-0" : ""}`} />
            <span className={`block w-full h-1 bg-white rounded transition-all duration-300 ease-in-out ${isMenuShow ? "origin-top-left bg-black -rotate-45 -translate-x-[1px] translate-y-[2px] " : ""}`} />
          </div>
        </div>
      </div>
      {/* navbar responsive */}
      <div
        className=" w-full font-roboto h-screen fixed top-0 left-0 right-0 z-[40] bg-biru transition-all duration-300 ease-in-out"
        style={{
          left: isMenuShow ? 0 : "100%",
        }}
      >
        <ul className=" flex flex-col pt-20 md:hidden h-full w-full">
          {menuItem.map((res, i) => (
            <li className=" h-14 border-b w-full" onClick={handleclick} key={i}>
              <a href={res.href} className="hover:text-orange-400 active:text-orange-400 text-slate-100 text-md font-bold flex items-center px-6 w-full h-full">
                {res.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
