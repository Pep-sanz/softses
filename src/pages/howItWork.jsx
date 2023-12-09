import MacbookPro from "../assets/MacbookPro.svg";

export default function HowItWork() {
  return (
    <div className="w-full h-screen font-roboto bg-bgSilver bg-cover flex justify-center relative max-sm:static max-sm:pt-10">
      <div className="absolute -left-52 -top-20 w-[1537px] h-[961px] max-sm:hidden">
        <img src={MacbookPro} alt="" className="w-[1537px] h-[961px]" />
      </div>
      <div className="flex flex-col justify-start items-start w-full h-full gap-5 mt-5 absolute right-10 top-28 max-sm:static max-sm:mt-0">
        <div className="w-full flex flex-col justify-center items-center max-sm:gap-2">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px]">HOW IT WORK</h5>
        <p className="text-black text-[40px] font-bold leading-[52px] max-sm:text-2xl">
          Solutions for every softwore
          <br />
          problems solved
        </p>
        </div>
        <div className="w-full gap-5 flex flex-col justify-center items-center max-sm:mt-16 max-sm:px-5">
          <div className="">
            <div className="flex items-center gap-3">
              <span className="text-neutral-400 text-3xl font-bold">01</span>
              <span className="text-black text-2xl font-medium max-sm:text-xl">Get Started</span>
            </div>
            <div className="w-[422px] h-[66px] text-stone-500 text-[13px] font-normal leading-[20.80px] ml-12 max-sm:w-auto ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="text-neutral-400 text-3xl font-bold">02</span>
              <span className="text-black text-2xl font-medium max-sm:text-xl">Start Our Ideas</span>
            </div>
            <div className="w-[422px] h-[66px] text-stone-500 text-[13px] font-normal leading-[20.80px] ml-12 max-sm:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="text-neutral-400 text-3xl font-bold">03</span>
              <span className="text-black text-2xl font-medium max-sm:text-xl">Softwore Solutions</span>
            </div>
            <div className="w-[422px] h-[66px] text-stone-500 text-[13px] font-normal leading-[20.80px] ml-12 max-sm:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
