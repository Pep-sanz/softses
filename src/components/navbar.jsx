import logo from "../assets/logo.svg";
import Button from "./button";

export default function Navbar() {
  return (
    <div className=" w-full z-50 font-roboto bg-biru flex justify-center items-center absolute ">
      <div className="container py-6 flex justify-between items-center border-b-2 box-border max-sm:justify-around">
        <img src={logo} alt="" className="w-[193.28px] h-[50px] max-sm:w-[150px] max-sm:h-auto" />
        <div className="text-center flex justify-evenly items-center w-1/2 max-sm:hidden">
          <ul className="text-white font-bold flex justify-between items-center w-full text-sm ">
            <li>
              <a href="#" className="text-orange-400 text-sm font-bold">
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
          </ul>
        </div>
        <div className="max-sm:hidden">
          <Button text="Download" />
        </div>
        <div className="hamburger menu w-8 h-[20px] relative hidden max-sm:block">
          <span className="w-full h-[4px] block bg-black absolute top-0 rounded-xl "></span>
          <span
            className="w-full h-[4px] block bg-black absolute
          top-2 rounded-xl "
          ></span>
          <span
            className="w-full h-[4px] block bg-black absolute
          top-4 rounded-xl "
          ></span>
        </div>
      </div>
    </div>
  );
}
