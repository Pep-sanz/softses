import logo from "../assets/logo.svg";
import Button from "./button";

export default function Navbar() {
  return (
    <div className=" w-full z-50 font-roboto bg-biru">
      <div className="container m-auto py-6 w-ful flex justify-between items-center border-b-2">
        <img src={logo} alt="" className="w-[193.28px] h-[50px]" />
        <div className="text-center flex justify-evenly items-center w-1/2 ">
          <ul className="text-white font-bold flex justify-between items-center w-full text-sm">
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
        <Button text="Download" />
      </div>
    </div>
  );
}
