import Button from "./button";
import Navbar from "./navbar";
import Cube from "../assets/cube.svg";
import Laptop from "../assets/img.svg";


export default function HeroSection() {
  return (
    <div className="w-full h-screen font-roboto">
        <Navbar />
      <div className="relative">
        <div className="w-full h-[60rem] m-auto bg-blue-600 rounded-b-[80px] -skew-y-6 absolute -top-20 left-0 right-0 -z-10"></div>
      </div>
        <div className="absolute top-48 left-0 right-0 flex flex-col justify-center items-center">
          <div className="text-center text-white text-[70px] font-bold mb-10">
            We will help you create
            <br />
            the software of your choice
          </div>
          <Button text="Get Started Now" />
        </div>
        <img src={Cube} alt="" className="absolute right-0 -bottom-[270px] w-[450px] h-[450px] -z-10" />
        <img src={Laptop} alt="" className="absolute -bottom-1/3 right-0 left-0 m-auto -z-10" />
    </div>
  );
}
