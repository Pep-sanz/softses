import Pngkit from "../assets/pngkit.svg";
import Map from "../assets/map.svg";
import Map1 from "../assets/map1.svg";
import Button from "../components/button";

export default function Download() {
  return (
    <div className="w-full flex justify-center items-center font-roboto overflow-hidden">
      <div className="h-[335px] relative mt-[84px] w-full">
        <div className="h-[284px] absolute bg-blue-600 bg-opacity-20 rounded-[30px] w-full top-[25px] left-[30px]" />
        <div className="h-[284px] absolute bg-blue-600 bg-opacity-30 rounded-[30px] w-full top-[5px] left-[16px]" />
        <div className="h-[300px] left-0 absolute bg-blue-600 rounded-[30px] flex w-full -top-10 ">
          <div className="w-full h-full absolute flex justify-evenly items-center">
            <div className="w-[600px] h-[330.43px] relative hidden">
              <img src={Pngkit} alt="" className="w-[600px] h-[330.43px] absolute top-11" />
            </div>
            <div className="box-border font-bold w-full pl-10 ">
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
            <img src={Map} alt="" className="hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
