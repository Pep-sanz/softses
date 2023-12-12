import MacbookPro from "../assets/MacbookPro.svg";

export default function HowItWork() {
  return (
    <div className="w-full h-screen font-roboto bg-bgSilver bg-cover flex justify-center pt-10 lg:justify-end mt-10 lg:mt-0">
      <div className="hidden lg:block lg:w-[1250px] lg:h-[961px]">
        <img src={MacbookPro} alt="" className="" />
      </div>
      <div className="flex flex-col justify-start items-start container h-full gap-5 lg:w-1/2 lg:justify-center">
        <div className="w-full flex flex-col justify-center items-center gap-2">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px]">HOW IT WORK</h5>
        <p className="text-black font-bold  text-2xl">
          Solutions for every softwore
          <br />
          problems solved
        </p>  
        </div>
        <div className="w-full gap-5 flex flex-col justify-center items-center mt-16 px-5 lg:mt-5 lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-neutral-400 text-3xl font-bold">01</span>
              <span className="text-black font-medium text-xl">Get Started</span>
            </div>
            <div className=" h-[66px] text-stone-500 text-[13px] font-normal leading-[20.80px] ml-12 w-auto ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="text-neutral-400 text-3xl font-bold">02</span>
              <span className="text-black font-medium text-xl">Start Our Ideas</span>
            </div>
            <div className=" h-[66px] text-stone-500 text-[13px] font-normal leading-[20.80px] ml-12 w-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="text-neutral-400 text-3xl font-bold">03</span>
              <span className="text-black font-medium text-xl">Softwore Solutions</span>
            </div>
            <div className="h-[66px] text-stone-500 text-[13px] font-normal leading-[20.80px] ml-12 w-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
