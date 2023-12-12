import Icon3 from "../assets/icon (3).svg";
import Icon4 from "../assets/icon (4).svg";
import Icon5 from "../assets/icon (5).svg";
import Map1 from "../assets/map1.svg";


export default function WorkProcess() {
  return (
    <div className="w-full flex flex-col justify-evenly items-center font-roboto max-sm:pt-16 ">
      <div className=" max-sm:absolute max-sm:bottom-0 w-full max-sm:hidden">
        <div className="max-sm:relative w-[1170px] h-[335px] mt-[84px] max-sm:w-[80%] max-sm:h-[170px] max-sm:mt-10">
          <div className="w-[1050px] h-[284px] left-[60px] top-[51px] absolute bg-blue-600 bg-opacity-20 rounded-[30px] max-sm:w-full max-sm:-left-[30px]" />
          <div className="w-[1100px] h-[284px] left-[35px] top-[36px] absolute bg-blue-600 bg-opacity-30 rounded-[30px] max-sm:w-full max-sm:-left-[15px]" />
          <div className="w-[1170px] h-[300px] left-0 top-0 absolute bg-blue-600 rounded-[30px] flex max-sm:w-full max-sm:left-[15px] ">
            <div className="w-full h-full absolute flex justify-evenly items-center max-sm:grid max-sm:grid-cols-2">
              <div className="w-[156px] h-[136px] relative max-sm:w-full">
                <div className=" w-full h-full m-auto flex flex-col justify-center items-center gap-2 absolute">
                  <div className="left-[14px] top-[110px] absolute text-white text-xl font-bold leading-relaxed max-sm:text-base max-sm:static max-sm:w-auto max-sm:top-0">Total Download</div>
                  <div className="w-[100px] h-[0px] left-[28px] top-[95px] absolute border-4 border-orange-400 max-sm:static max-sm:top-0"></div>
                  <div className="left-0 top-0 absolute text-white text-[70px] font-bold leading-[91px] max-sm:text-3xl max-sm:static">80k+</div>
                </div>
              </div>
              <div className="w-[156px] h-[136px] relative max-sm:w-full">
                <div className=" w-full h-full m-auto flex flex-col justify-center items-center gap-2 absolute">
                  <div className="left-[14px] top-[110px] absolute text-white text-xl font-bold leading-relaxed max-sm:text-base max-sm:static max-sm:w-auto max-sm:top-0">Happy Users</div>
                  <div className="w-[100px] h-[0px] left-[28px] top-[95px] absolute border-4 border-orange-400 max-sm:static max-sm:top-0"></div>
                  <div className="left-0 top-0 absolute text-white text-[70px] font-bold leading-[91px] max-sm:text-3xl max-sm:static">25k+</div>
                </div>
              </div>
              <div className="w-[156px] h-[136px] relative max-sm:w-full max-sm:col-span-2">
                <div className=" w-full h-full m-auto flex flex-col justify-center items-center gap-2 absolute">
                  <div className="left-[14px] top-[110px] absolute text-white text-xl font-bold leading-relaxed max-sm:text-base max-sm:static max-sm:w-auto max-sm:top-0">Great Reviews</div>
                  <div className="w-[100px] h-[0px] left-[28px] top-[95px] absolute border-4 border-orange-400 max-sm:static max-sm:top-0"></div>
                  <div className="left-0 top-0 absolute text-white text-[70px] font-bold leading-[91px] max-sm:text-3xl max-sm:static">35k+</div>
                </div>
              </div>
            </div>
            <div className="m-auto flex ">
              <img src={Map1} alt="" />
              <img src={Map} alt="" className="max-sm:hidden" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5 mb-10">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px]">WORK PROCESS</h5>
        <p className=" text-black text-[40px] font-bold leading-[52px] max-sm:text-2xl max-sm:text-center">How to work it software application</p>
      </div>
      <div className="w-full flex justify-evenly items-center relative max-sm:flex-col">
        <span className="w-[330px] border-zinc-300 border border-dashed absolute top-[40px] left-[335px] max-sm:hidden"></span>
        <span className="w-[330px] border-zinc-300 border border-dashed absolute top-[40px] left-[785px] max-sm:hidden"></span>
        <div className="w-[330px] h-[282px] flex flex-col justify-around items-center">
          <span className="text-stone-300 text-[40px] font-bold leading-[52px]">01</span>
          <img src={Icon3} alt="" className="w-[58.07px] h-[60px]" />
          <h5 className="text-center text-black text-2xl font-bold">Create Account</h5>
          <p className="w-[330px] h-[60px] text-center text-stone-500 text-[13px] font-normal leading-[20.80px]">This should be used to tell a story and let your users know more about your service. How can you benefit them?</p>
        </div>
        <div className="w-[330px] h-[282px] flex flex-col justify-around items-center">
          <span className="text-stone-300 text-[40px] font-bold leading-[52px]">02</span>
          <img src={Icon4} alt="" className="w-[58.07px] h-[60px]" />
          <h5 className="text-center text-black text-2xl font-bold">Computer Boots</h5>
          <p className="w-[330px] h-[60px] text-center text-stone-500 text-[13px] font-normal leading-[20.80px]">This should be used to tell a story and let your users know more about your service. How can you benefit them?</p>
        </div>
        <div className="w-[330px] h-[282px] flex flex-col justify-around items-center">
          <span className="text-stone-300 text-[40px] font-bold leading-[52px]">03</span>
          <img src={Icon5} alt="" className="w-[58.07px] h-[60px]" />
          <h5 className="text-center text-black text-2xl font-bold">Computer Setup</h5>
          <p className="w-[330px] h-[60px] text-center text-stone-500 text-[13px] font-normal leading-[20.80px]">This should be used to tell a story and let your users know more about your service. How can you benefit them?</p>
        </div>
      </div>
    </div>
  );
}
