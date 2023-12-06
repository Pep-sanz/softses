import MacbookPro from "../assets/MacbookPro.svg";

export default function HowItWork() {
  return (
    <div className="relative w-full h-screen font-roboto">
      <div className="w-full h-screen box-border flex justify-between items-center bg-neutral-100 -skew-y-6 rounded-t-[80px] absolute "></div>
      <img src={MacbookPro} alt="" className="w-[1537px] h-[961px] absolute -left-40 -top-44" />
      <div className="absolute right-5 top-10 flex flex-col justify-start items-start h-full gap-10 ">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px]">HOW IT WORK</h5>
        <p className="text-black text-[40px] font-bold leading-[52px]">
          Solutions for every softwore
          <br />
          problems solved
        </p>
        <div className="">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <span className="text-neutral-400 text-3xl font-bold">01</span>
              <span className="text-black text-2xl font-medium">Get Started</span>
            </div>
            <div className="w-[422px] h-[66px] text-stone-500 text-[13px] font-normal leading-[20.80px] ml-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
          </div>
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <span className="text-neutral-400 text-3xl font-bold">02</span>
              <span className="text-black text-2xl font-medium">Start Our Ideas</span>
            </div>
            <div className="w-[422px] h-[66px] text-stone-500 text-[13px] font-normal leading-[20.80px] ml-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="text-neutral-400 text-3xl font-bold">03</span>
              <span className="text-black text-2xl font-medium">Softwore Solutions</span>
            </div>
            <div className="w-[422px] h-[66px] text-stone-500 text-[13px] font-normal leading-[20.80px] ml-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
