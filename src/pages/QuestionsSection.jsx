import Pngkit from "../assets/pngkit.svg";
import Map from "../assets/map.svg";
import Map1 from "../assets/map1.svg";

export default function QuestionsSection() {
  return (
    <div className="w-full h-screen font-roboto flex flex-col justify-center items-center box-border">
      <div className=" w-full flex flex-col justify-center items-center">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px] mb-5 ">ASKED QUESTIONS</h5>
        <p className="text-black font-bold text-3xl text-center">Something about our management</p>
      </div>
      <div className="w-full box-border flex justify-around items-center flex-col mt-10 ">
        <div className="flex flex-col justify-center items-center w-full gap-[15px]">
          <div className="text-lg font-bold bg-white text-white shadow rounded-lg w-[80%] h-auto">
            <div className="h-[47px] bg-orange-400 flex justify-between items-center px-5 rounded-t-lg">
              <p className="leading-normal">Completely Responsive.</p>
              <span className="leading-normal self-start">_</span>
            </div>
            <p className="text-zinc-500 text-[13px] font-normal px-5 pt-2 leading-[20.80px]">
              AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with
              AeroLand.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-zinc-800 text-lg font-bold w-[80%] gap-[15px]">
            <div className="w-full h-12 bg-white shadow flex justify-between items-center rounded-lg px-3">
              <p className="leading-normal">Free Lifetime Updates.</p>
              <span className="leading-normal">+</span>
            </div>
            <div className="w-full h-12 bg-white shadow flex justify-between items-center rounded-lg px-3">
              <p className="leading-normal">Excellent Customer Support.</p>
              <span className="leading-normal">+</span>
            </div>
            <div className="w-full h-12 bg-white shadow flex justify-between items-center rounded-lg px-3">
              <p className="leading-normal">Easy & User Friendly Services.</p>
              <span className="leading-normal">+</span>
            </div>
          </div>
        </div>
        <img src={Pngkit} alt="" className="w-[700px] h-[385.96px] hidden" />
      </div>
      <div className=" absolute bottom-0 w-full hidden ">
        <div className="relative w-[80%] h-[170px] mt-10">
          <div className="h-[284px] top-[51px] absolute bg-blue-600 bg-opacity-20 rounded-[30px] w-full -left-[30px]" />
          <div className="h-[284px] top-[36px] absolute bg-blue-600 bg-opacity-30 rounded-[30px] w-full -left-[15px]" />
          <div className="h-[300px] top-0 absolute bg-blue-600 rounded-[30px] flex w-full left-[15px] ">
            <div className="w-full h-full absolute justify-evenly items-center grid grid-cols-2">
              <div className="h-[136px] relative w-full">
                <div className=" w-full h-full m-auto flex flex-col justify-center items-center gap-2 absolute">
                  <div className="left-[14px] text-white font-bold leading-relaxed text-base static w-auto top-0">Total Download</div>
                  <div className="w-[100px] h-[0px] left-[28px] border-4 border-orange-400 static top-0"></div>
                  <div className="left-0 top-0 text-white text-[70px] font-bold leading-[91px] text-3xl static">80k+</div>
                </div>
              </div>
              <div className=" h-[136px] relative w-full">
                <div className=" w-full h-full m-auto flex flex-col justify-center items-center gap-2 absolute">
                  <div className="left-[14px] text-white font-bold leading-relaxed text-base static w-auto top-0">Happy Users</div>
                  <div className="w-[100px] h-[0px] left-[28px] border-4 border-orange-400 static top-0"></div>
                  <div className="left-0 top-0 text-white font-bold leading-[91px] text-3xl static">25k+</div>
                </div>
              </div>
              <div className="h-[136px] relative w-full col-span-2">
                <div className=" w-full h-full m-auto flex flex-col justify-center items-center gap-2 absolute">
                  <div className="left-[14px] text-white font-bold leading-relaxed text-base static w-auto top-0">Great Reviews</div>
                  <div className="w-[100px] h-[0px] left-[28px] border-4 border-orange-400 static top-0"></div>
                  <div className="left-0 top-0 text-white text-[70px] font-bold leading-[91px] text-3xl static">35k+</div>
                </div>
              </div>
            </div>
            <div className="m-auto flex ">
              <img src={Map1} alt="" />
              <img src={Map} alt="" className="hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
