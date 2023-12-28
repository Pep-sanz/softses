import Button from "../components/button";
import Navbar from "../components/navbar";
import Cube from "../assets/cube.svg";
import Laptop from "../assets/img.svg";
import Envato from "../assets/envato.svg";
import Docean from "../assets/3docean.svg";
import Graph from "../assets/graphicrever.svg";
import Kanba from "../assets/kanba.svg";

export default function HeroSection() {
  return (
    <div className="w-full h-screen font-roboto overflow-x-hidden">
      <Navbar />
      <div className="h-[45vh] lg:h-[55vh] bg-biru w-full relative">
        <img src="/img/bgBlue.svg" className="w-full -bottom-[80px] sm:-bottom-[150px] md:-bottom-[200px] absolute" alt="" />
        <div className="absolute bottom-[-140px] sm:bottom-[-160px] md:bottom-[-200px] lg:bottom-[-185px] m-auto w-full h-full px-6  flex flex-col justify-between items-center">
          <div className="w-full h-full flex flex-col justify-center items-center mb-6">
            <div className="text-center text-white text-2xl sm:text-4xl font-bold mb-6 lg:text-6xl lg:leading-[70px]">
              <p>
                We will help you create <br />
                the software of your choice
              </p>
            </div>
            <Button text="Get Started Now" />
            <img src={Laptop} alt="laptop" className="w-[400px] md:w-[450px] lg:w-[550px] mt-6 sm:mt-10 lg:mt-6" />
          </div>
        </div>
          <div className="hidden sm:block w-full h-[33vh] top-[280px] md:h-[42vh] relative">
            <img src={Cube} alt="" className=" w-[30vh] md:w-[35vh] lg:w-[45vh] absolute right-[-35px] md:right-[-25px] lg:right-[20px] bottom-0 lg:-bottom-8" />
          </div>
      </div>
      <div className="absolute w-full h-[25vh] lg:h-auto bottom-10 md:bottom-2 lg:flex justify-center items-center">
        <div className="container grid grid-cols-2 m-auto lg:flex">
          <img src={Envato} alt="" className="h-[100px] w-[125px] mx-auto md:w-[150px]" />
          <img src={Docean} alt="" className="h-[100px] w-[125px] mx-auto md:w-[150px]" />
          <img src={Graph} alt="" className="h-[100px] w-[125px] mx-auto md:w-[150px]" />
          <img src={Kanba} alt="" className="h-[100px] w-[125px] mx-auto  md:w-[150px]" />
        </div>
      </div>
    </div>
  );
}
