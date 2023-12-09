import Pngkit from "../assets/pngkit.svg";
import Map from "../assets/map.svg";
import Map1 from "../assets/map1.svg";
import Button from "../components/button";

export default function Download() {
  return (
    <div className="w-full flex justify-center items-center font-roboto">
      <div className="w-[1170px] h-[335px] relative mt-[84px]">
        <div className="w-[1050px] h-[284px] left-[60px] top-[51px] absolute bg-blue-600 bg-opacity-20 rounded-[30px]" />
        <div className="w-[1100px] h-[284px] left-[35px] top-[36px] absolute bg-blue-600 bg-opacity-30 rounded-[30px]" />
        <div className="w-[1170px] h-[300px] left-0 top-0 absolute bg-blue-600 rounded-[30px] flex ">
          <div className="w-full h-full absolute flex justify-evenly items-center">
            <div className="w-[600px] h-[330.43px] relative">
              <img src={Pngkit} alt="" className="w-[600px] h-[330.43px] absolute top-11" />
            </div>
            <div className="w-1/2 box-border font-bold ">
              <div className="text-white text-[40px] font-bold mb-10 leading-[52px]">
                Download now & enjoy
                <br />
                new features
              </div>
              <Button text="download" />
            </div>
          </div>
          <div className="m-auto flex ">
            <img src={Map1} alt="" />
            <img src={Map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
