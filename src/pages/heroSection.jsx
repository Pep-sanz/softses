import Button from "../components/button";
import Navbar from "../components/navbar";
import Cube from "../assets/cube.svg";
import Laptop from "../assets/img.svg";
import bgBlue from "../assets/bgBlue.png";

export default function HeroSection() {
  return (
    <div className="w-full h-screen font-roboto ">
      <Navbar />
      <img src={bgBlue} alt="" />
      <div className="absolute top-48 left-0 right-0 flex flex-col justify-center items-center">
        <div className="text-center text-white text-[70px] font-bold mb-10">
          We will help you create
          <br />
          the software of your choice
        </div>
        <Button text="Get Started Now" />
      </div>
      <img src={Cube} alt="" className="absolute right-0 -bottom-[100px] w-[450px] h-[450px] " />
      <img src={Laptop} alt="" className="absolute -bottom-1/3 right-0 left-0 m-auto " />
    </div>
  );
}
