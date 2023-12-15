import Button from "../components/button";
import Navbar from "../components/navbar";
import Cube from "../assets/cube.svg";
import Laptop from "../assets/img.svg";
import Envato from "../assets/envato.svg";
import Docean from "../assets/3docean.svg";
import Graph from "../assets/graphicrever.svg";
import Kanba from "../assets/kanba.svg";
// import bgBlue from "/img/bgBlue.svg";

export default function HeroSection() {
  return (
    <div className="w-full h-screen font-roboto relative  flex justify-center">
      <div className="h-[75vh] sm:h-[65vh] bg-biru w-full">
        <img
          src="/img/bgBlue.svg"
          className="w-full bottom-[75px] absolute"
          alt=""
        />
      </div>
      <Navbar />
      <div className="absolute bottom-0 px-6">
        <img src={Laptop} alt="" />
      </div>
      {/* <img src={"/img/bgBlue.svg"} alt="" /> */}
      {/* <div className="w-full h-[25%] relative bg-biru after:content-[''] after:absolute after:-bottom-12 after:left-1  after:w-full rounded-b-3xl after:h-full after:bg-biru after:origin-bottom after:-rotate-6 after:rounded-3xl sm:h-1/2 lg:h-1/2 lg:after:-bottom-24"/>
      <div className="absolute top-40 left-0 right-0 flex flex-col justify-center items-center lg:top-36 ">
        <div className="text-center text-white text-2xl font-bold mb-5 sm:text-[40px] sm:mb-8 lg:text-[60px]">
          <p className="sm:leading-[52px] lg:leading-[80px]">
            We will help you create <br />
            the software of your choice
          </p>
        </div>
        <Button text="Get Started Now" />
      </div>
      <div className="absolute h-[450px] w-[225px] top-[380px] -right-12 sm:-right-10 sm:top-[300px] sm:w-[300px] hidden sm:block lg:w-[450px] lg:h-[350px] lg:top-[250px] lg:-right-8">
        <img src={Cube} alt="" />
      </div>
      <div className="absolute right-0 left-0 m-auto w-[400px] top-[350px] sm:w-[400px] sm:h-[220px] sm:top-[400px] lg:w-[600px] lg:h-[341.09px]">
        <img src={Laptop} alt="" />
      </div>
      <div className="container m-auto grid grid-cols-2 sm:flex sm:justify-around sm:items-center absolute bottom-0 left-0 right-0 lg:bottom-0 lg:justify-between">
        <img src={Envato} alt="" className="h-[50px] w-[115px] m-auto lg:w-[231px] lg:h-[50px]" />
        <img src={Docean} alt="" className=" h-[50px] w-[115px] m-auto lg:w-[231px] lg:h-[50px]" />
        <img src={Graph} alt="" className="h-[50px] w-[115px] m-auto lg:w-[231px] lg:h-[50px]" />
        <img src={Kanba} alt="" className="h-[50px] w-[115px] m-auto lg:w-[231px] lg:h-[50px]" />
      </div> */}
    </div>
  );
}
