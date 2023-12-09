import Button from "../components/button";
import Navbar from "../components/navbar";
import Cube from "../assets/cube.svg";
import Laptop from "../assets/img.svg";
import bgBlue from "../assets/bgBlue.png";
import Envato from "../assets/envato.svg";
import Docean from "../assets/3docean.svg";
import Graph from "../assets/graphicrever.svg";
import Kanba from "../assets/kanba.svg";

export default function HeroSection() {
  return (
    <div className="w-full h-screen font-roboto relative overflow-hidden">
      <Navbar />
      <img src={bgBlue} alt="" className=" absolute bottom-24  max-sm:top-16 max-sm:h-[60%]" />
      <div className="absolute top-48 left-0 right-0 flex flex-col justify-center items-center max-sm:top-32">
        <div className="text-center text-white text-[70px] font-bold mb-10 max-sm:text-4xl">
          We will help you create
          <br />
          the software of your choice
        </div>
        <Button text="Get Started Now" />
      </div>
      <div className="absolute w-[450px] h-[450px] right-0 -bottom-[100px] max-sm:top-80 max-sm:-right-8 max-sm:w-[225px] ">
        <img src={Cube} alt="" className="   " />
      </div>
      <img src={Laptop} alt="" className="absolute -bottom-1/3 right-0 left-0 m-auto max-sm:w-[255px] max-sm:-top-16" />
      <div className="container m-auto h-64 flex justify-between items-center  max-sm:w-auto absolute max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:justify-around ">
        <div className="">
          <img src={Envato} alt="" className="w-[231px] h-[50px] max-sm:w-[115px] " />
          <img src={Docean} alt="" className="w-[231px] h-[50px] max-sm:w-[115px]" />
        </div>
        <div className="">
          <img src={Graph} alt="" className="w-[231px] h-[50px] max-sm:w-[115px]" />
          <img src={Kanba} alt="" className="w-[231px] h-[50px] max-sm:w-[115px]" />
        </div>
      </div>
    </div>
  );
}
