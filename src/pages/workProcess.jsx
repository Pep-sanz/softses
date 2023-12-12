import Icon3 from "../assets/icon (3).svg";
import Icon4 from "../assets/icon (4).svg";
import Icon5 from "../assets/icon (5).svg";

export default function WorkProcess() {
  return (
    <div className="w-full flex flex-col justify-evenly items-center font-roboto lg:pt-16 lg:mt-60">
      <div className="w-full flex flex-col justify-center items-center gap-5 mb-10">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px]">WORK PROCESS</h5>
        <p className=" text-black text-3xl text-center font-bold lg:text-2xl lg:text-center">How to work it software application</p>
      </div>
      <div className="w-full flex items-center relative flex-col gap-10">
        <div className=" w-full flex flex-col justify-evenly items-center">
          <div className="hidden container lg:flex justify-evenly items-center px-8 ">
            <span className="text-stone-300 text-[40px] font-bold leading-[52px]">01</span>
            <span className="w-[255px] h-0 border-zinc-300 border-b-2 border-dashed"></span>
            <span className="text-stone-300 text-[40px] font-bold leading-[52px]">02</span>
            <span className="w-[255px] h-0 border-zinc-300 border-b-2 border-dashed "></span>
            <span className="text-stone-300 text-[40px] font-bold leading-[52px]">03</span>
          </div>
          <div className="w-full flex flex-col justify-around items-center sm:grid sm:grid-cols-2 lg:flex lg:flex-row">
            <div className="">
              <div className="w-[330px] h-[282px] flex flex-col justify-around items-center m-auto ">
                <span className="text-stone-300 text-[40px] font-bold leading-[52px] lg:hidden">01</span>
                <img src={Icon3} alt="" className="w-[58.07px] h-[60px]" />
                <h5 className="text-center text-black text-2xl font-bold">Create Account</h5>
                <p className="w-[330px] h-[60px] text-center text-stone-500 text-[13px] font-normal leading-[20.80px]">This should be used to tell a story and let your users know more about your service. How can you benefit them?</p>
              </div>
            </div>
            <div className="">
              <div className="w-[330px] h-[282px] flex flex-col justify-around items-center m-auto">
                <span className="text-stone-300 text-[40px] font-bold leading-[52px] lg:hidden">02</span>
                <img src={Icon4} alt="" className="w-[58.07px] h-[60px]" />
                <h5 className="text-center text-black text-2xl font-bold">Computer Boots</h5>
                <p className="w-[330px] h-[60px] text-center text-stone-500 text-[13px] font-normal leading-[20.80px]">This should be used to tell a story and let your users know more about your service. How can you benefit them?</p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="w-[330px] h-[282px] flex flex-col justify-around items-center m-auto">
                <span className="text-stone-300 text-[40px] font-bold leading-[52px] lg:hidden">03</span>
                <img src={Icon5} alt="" className="w-[58.07px] h-[60px]" />
                <h5 className="text-center text-black text-2xl font-bold">Computer Setup</h5>
                <p className="w-[330px] h-[60px] text-center text-stone-500 text-[13px] font-normal leading-[20.80px]">This should be used to tell a story and let your users know more about your service. How can you benefit them?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
