import Pngkit from "../assets/pngkit.svg";
import Map from "../assets/map.svg";
import Map1 from "../assets/map1.svg";

export default function QuestionsSection() {
  return (
    <div className="w-full font-roboto flex flex-col justify-center items-center box-border">
      <div className=" w-full flex flex-col justify-center items-center">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px]">ASKED QUESTIONS</h5>
        <p className="text-black text-[40px] font-bold leading-[52px]">Something about our management</p>
      </div>
      <div className="w-full mt-[139px] box-border flex justify-around items-center">
        <div className="flex flex-col justify-center items-center gap-[32px]">
          <div className="w-[570px] h-[142px] text-lg font-bold bg-white text-white shadow rounded-lg">
            <div className="h-[47px] bg-orange-400 flex justify-between items-center px-5 rounded-t-lg">
              <p className="leading-normal">Completely Responsive.</p>
              <span className="leading-normal self-start">_</span>
            </div>
            <p className="text-zinc-500 text-[13px] font-normal px-5 pt-2 leading-[20.80px]">
              AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with
              AeroLand.
            </p>
          </div>
          <div className="gap-[32px] flex flex-col justify-center items-center text-zinc-800 text-lg  font-bold">
            <div className="w-[570px] h-12 bg-white shadow flex justify-between items-center px-5 rounded-lg">
              <p className="leading-normal">Free Lifetime Updates.</p>
              <span className="leading-normal">+</span>
            </div>
            <div className="w-[570px] h-12 bg-white shadow flex justify-between items-center px-5 rounded-lg">
              <p className="leading-normal">Excellent Customer Support.</p>
              <span className="leading-normal">+</span>
            </div>
            <div className="w-[570px] h-12 bg-white shadow flex justify-between items-center px-5 rounded-lg">
              <p className="leading-normal">Easy & User Friendly Services.</p>
              <span className="leading-normal">+</span>
            </div>
          </div>
        </div>
        <img src={Pngkit} alt="" className="w-[700px] h-[385.96px]" />
      </div>
      <div className="w-[1170px] h-[335px] relative mt-[84px]">
        <div className="w-[1050px] h-[284px] left-[60px] top-[51px] absolute bg-blue-600 bg-opacity-20 rounded-[30px]" />
        <div className="w-[1100px] h-[284px] left-[35px] top-[36px] absolute bg-blue-600 bg-opacity-30 rounded-[30px]" />
        <div className="w-[1170px] h-[300px] left-0 top-0 absolute bg-blue-600 rounded-[30px] flex ">
          <div className="w-full h-full absolute flex justify-evenly items-center">
            <div className="w-[156px] h-[136px] relative">
              <div className="left-[9px] top-[110px] absolute text-white text-xl font-bold leading-relaxed">Total Download</div>
              <div className="w-[100px] h-[0px] left-[28px] top-[95px] absolute border-4 border-orange-400"></div>
              <div className="left-0 top-0 absolute text-white text-[70px] font-bold leading-[91px]">80k+</div>
            </div>
            <div className="w-[156px] h-[136px] relative">
              <div className="left-[21px] top-[110px] absolute text-white text-xl font-bold leading-relaxed">Happy Users</div>
              <div className="w-[100px] h-[0px] left-[28px] top-[95px] absolute border-4 border-orange-400"></div>
              <div className="left-0 top-0 absolute text-white text-[70px] font-bold leading-[91px]">25k+</div>
            </div>
            <div className="w-[156px] h-[136px] relative">
              <div className="left-[14px] top-[110px] absolute text-white text-xl font-bold leading-relaxed">Great Reviews</div>
              <div className="w-[100px] h-[0px] left-[28px] top-[95px] absolute border-4 border-orange-400"></div>
              <div className="left-0 top-0 absolute text-white text-[70px] font-bold leading-[91px]">35k+</div>
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
