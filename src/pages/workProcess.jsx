import Icon3 from "../assets/icon (3).svg";
import Icon4 from "../assets/icon (4).svg";
import Icon5 from "../assets/icon (5).svg";

export default function WorkProcess() {
  return (
    <div className="w-full  h-[610px] flex flex-col justify-evenly items-center font-roboto ">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px]">WORK PROCESS</h5>
        <p className=" text-black text-[40px] font-bold leading-[52px]">How to work it software application</p>
      </div>
      <div className="w-full flex justify-evenly items-center relative">
        <span className="w-[330px] border-zinc-300 border border-dashed absolute top-[40px] left-[335px]"></span>
        <span className="w-[330px] border-zinc-300 border border-dashed absolute top-[40px] left-[785px]"></span>
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
