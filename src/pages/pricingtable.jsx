import Button from "../components/button";
export default function PricingTable() {
  return (
    <div className="w-full pt-16 flex flex-col justify-evenly items-center font-roboto mt-20 px-6">
      <div className="w-full flex flex-col justify-center items-center mb-10">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px]">PRICING TABLE</h5>
        <p className="text-black font-bold leading-[52px] text-2xl">Choose your pricing plan</p>
      </div>
      <div className="w-full flex justify-evenly items-center flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row">
        <div className="">
          <div className="max-w-[370px] h-[596px] border shadow border-zinc-100 flex flex-col justify-evenly items-center bg-white rounded mb-10 m-auto">
            <h5 className="text-black text-[40px] font-medium leading-[64px]">FREE</h5>
            <div className="w-full h-16 ">
              <div className="w-1/2 flex justify-center border-b-2 m-auto">
                <div className=" text-blue-600 text-base font-medium leading-relaxed">$</div>
                <span className="text-blue-600 text-[40px] font-medium leading-[64px]">0</span>
                <span className="text-black text-base font-medium leading-[64px]">/mo</span>
              </div>
            </div>
            <div className="text-center text-stone-500 text-[13px] font-medium leading-[42.90px]">
              Unlimited Landing Pages
              <br />
              Unlimited Team Members
              <br />
              Unlimited Leads
              <br />
              Unlimited Page Views
              <br />
              Export in HTML/CSS
            </div>
            <Button text="Get Started" />
            <div className="w-full h-[38px] text-center text-neutral-400 text-[13px] font-normal leading-[20.80px]">
              Start by trying our service for 30 days free trial
              <br />
              no credit card required.
            </div>
          </div>
        </div>
        <div className="">
          <div className="max-w-[370px] h-[596px] border border-zinc-100 flex flex-col justify-evenly items-center bg-white shadow rounded mb-10 m-auto">
            <h5 className="text-orange-400 text-[40px] font-medium leading-[64px]">Standard</h5>
            <div className="w-full h-16 ">
              <div className="w-1/2 flex justify-center border-b-2 m-auto">
                <div className=" text-blue-600 text-base font-medium leading-relaxed">$</div>
                <span className="text-blue-600 text-[40px] font-medium leading-[64px]">99</span>
                <span className="text-black text-base font-medium leading-[64px]">/mo</span>
              </div>
            </div>
            <div className="text-center text-stone-500 text-[13px] font-medium leading-[42.90px]">
              Unlimited Landing Pages
              <br />
              Unlimited Team Members
              <br />
              Unlimited Leads
              <br />
              Unlimited Page Views
              <br />
              Export in HTML/CSS
            </div>
            <Button text="Get Started" />
            <div className="w-full h-[38px] text-center text-neutral-400 text-[13px] font-normal leading-[20.80px]">
              Start by trying our service for 30 days free trial
              <br />
              no credit card required.
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="max-w-[370px] h-[596px] shadow border border-zinc-100 flex flex-col justify-evenly items-center bg-white rounded m-auto mb-10">
            <h5 className="text-black text-[40px] font-medium leading-[64px]">Premium</h5>
            <div className="w-full h-16 ">
              <div className="w-1/2 flex justify-center border-b-2 m-auto">
                <div className=" text-blue-600 text-base font-medium leading-relaxed">$</div>
                <span className="text-blue-600 text-[40px] font-medium leading-[64px]">350</span>
                <span className="text-black text-base font-medium leading-[64px]">/mo</span>
              </div>
            </div>
            <div className="text-center text-stone-500 text-[13px] font-medium leading-[42.90px]">
              Unlimited Landing Pages
              <br />
              Unlimited Team Members
              <br />
              Unlimited Leads
              <br />
              Unlimited Page Views
              <br />
              Export in HTML/CSS
            </div>
            <Button text="Get Started" />
            <div className="w-full h-[38px] text-center text-neutral-400 text-[13px] font-normal leading-[20.80px]">
              Start by trying our service for 30 days free trial
              <br />
              no credit card required.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
