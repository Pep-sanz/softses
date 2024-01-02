 import Pngkit from "../assets/pngkit.svg";
import Map from "../assets/map.svg";
import Map1 from "../assets/map1.svg";
import Button from "../components/button";

export default function Download() {
  return (
    <div className="container m-auto flex justify-center items-center font-roboto px-6 lg:pb-20" >
      <div className="h-[335px] relative mt-[84px] w-full">
        <div className="h-[284px] absolute bg-blue-600 bg-opacity-20 rounded-[30px] w-full top-[30px] left-[30px] hidden sm:block" />
        <div className="h-[284px] absolute bg-blue-600 bg-opacity-30 rounded-[30px] w-full top-[5px] left-[16px] hidden sm:block" />
        <div className="h-[300px] left-0 absolute bg-blue-600 rounded-[30px] flex w-full -top-10 ">
          <div className="w-full h-full absolute flex justify-evenly items-center">
            <div className="w-[600px] h-[330.43px] relative hidden lg:block">
              <img src={Pngkit} alt="" className="w-[600px] h-[330.43px] absolute top-11" />
            </div>
            <div className="box-border font-bold w-full lg:w-1/2 pl-10 ">
              <div className="text-white text-[40px] font-bold mb-10 leading-[52px] text-3xl">
                Download now & enjoy
                <br />
                new features
              </div>
              <Button text="download" />
            </div>
          </div>
          <div className="m-auto flex ">
            <img src={Map1} alt="" />
            <img src={Map} alt="" className="hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  );
}
