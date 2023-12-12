import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import Logo2 from "../assets/logo2.png";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center border-t-2 overflow-hidden">
      <div className=" h-[341px] container flex flex-col justify-between items-center border-b-2 lg:flex-row ">
        <div className=" box-border h-full flex flex-col justify-center text-sm">
          <img src={Logo2} alt="" className="mb-[25px] w-[100px] h-[25px] lg:w-[193.28px] lg:h-[50px]" />
          <span className="w-[370px]">Landing page builder is a hosted platform powered by the brizy builder aiming to connect you with potential clients.</span>
        </div>
        <div className="w-full flex justify-around items-center text-stone-500 text-[13px] font-normal ">
          <div className="leading-7">
            <h5 className="font-bold text-black leading-loose text-base mb-[15px]">Company</h5>
            <ul>
              <li>
                <a href="" className="hover:text-orange-400 transition">About us</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400 transition">Our Team</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400 transition">Products</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400 transition">Contact</a>
              </li>
            </ul>
          </div>
          <div className="leading-7">
            <h5 className="font-bold text-black leading-loose text-base mb-[15px]">Product</h5>
            <ul>
              <li>
                <a href="" className="hover:text-orange-400 transition">Feature</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400 transition">pricing</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400 transition">Credit</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400 transition">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="leading-7">
            <h5 className="font-bold text-black leading-loose text-base mb-[15px]">Download</h5>
            <ul>
              <li>
                <a href="" className="hover:text-orange-400 transition">iOS</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400 transition">Android</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400 transition">Microsoft</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400 transition">Desktop</a>
              </li>
            </ul>
          </div>
          <div className="leading-7">
            <h5 className="font-bold text-black leading-loose text-base mb-[15px]">Support</h5>
            <ul>
              <li>
                <a href="" className="hover:text-orange-400 transition">Privacy</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400 transition">Help</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400 transition">terms</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400 transition">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[87px] container flex items-center flex-col justify-center gap-3 lg:flex-row lg:justify-between">
        <div>
          <span className="text-stone-500 text-sm font-normal  leading-snug">Copyright ©2019 </span>
          <span className="text-blue-600 text-sm font-medium  leading-snug">softsas</span>
          <span className="text-stone-500 text-sm font-normal  leading-snug">. All Rights Reserved</span>
        </div>
        <div className="w-[180px] h-[30px] flex justify-between items-center ">
          <a href="" className="hover:bg-blue-600 hover:text-white transition text-stone-300 w-[40px] h-[40px] rounded-full flex justify-center items-center border border-stone-300">
            <FiFacebook className="w-[20px] h-[20px]"/>
          </a>
          <a href="" className="hover:bg-blue-600 hover:text-white transition text-stone-300 w-[40px] h-[40px] rounded-full flex justify-center items-center border border-stone-300">
            <FiTwitter className="w-[20px] h-[20px]"/>
          </a>
          <a href="" className="hover:bg-blue-600 hover:text-white transition text-stone-300 w-[40px] h-[40px] rounded-full flex justify-center items-center border border-stone-300">
            <FiInstagram className="w-[20px] h-[20px]"/>
          </a>
          <a href="" className="hover:bg-blue-600 hover:text-white transition text-stone-300 w-[40px] h-[40px] rounded-full flex justify-center items-center border border-stone-300">
            <FiLinkedin className="w-[20px] h-[20px]"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
