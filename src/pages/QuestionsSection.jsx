import Pngkit from "../assets/pngkit.svg";
import Map from "../assets/map.svg";
import Map1 from "../assets/map1.svg";
import MyDropdown from "../components/MyDropdown/MyDropdown.jsx";

const content = [
  {
    id: 1,
    title: "Completely Responsive.",
    description:
      " AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.",
  },
  {
    id: 2,
    title: "Free Lifetime Updates.",
    description:
      " AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.",
  },
  {
    id: 3,
    title: "Easy & User Friendly Services.",
    description:
      " AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.",
  },
];

export default function QuestionsSection() {

  return (
    <div className="w-full font-roboto flex flex-col justify-start items-center box-border mt-16 gap-[50px] px-6">
      <div className=" w-full flex flex-col justify-center items-center">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px] mb-5 ">ASKED QUESTIONS</h5>
        <p className="text-black font-bold text-3xl text-center">Something about our management</p>
      </div>
      <div className="w-full box-border flex justify-around items-center flex-col mt-10 md:flex-row ">
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 gap-[15px] px-6">
          {content.map((res) => (
            <MyDropdown key={res.id} title={res.title} id={res.id} description={res.description} content={content} />
          ))}
        </div>
        <img src={Pngkit} alt="" className="w-[350px] h-[285.96px] lg:w-[600px] lg:h-[385.96px]" />
      </div>
      <div className="container hidden lg:block lg:mt-5 ">
        <div className="relative w-[80%] h-[170px] mt-10 m-auto">
          <div className="h-[284px] top-[51px] absolute bg-blue-600 bg-opacity-20 rounded-[30px] w-full -left-[30px]" />
          <div className="h-[284px] top-[36px] absolute bg-blue-600 bg-opacity-30 rounded-[30px] w-full -left-[15px]" />
          <div className="h-[300px] top-0 absolute bg-blue-600 rounded-[30px] flex w-full left-[15px] ">
            <div className="w-full h-full absolute grid grid-cols-2 sm:flex sm:justify-between sm:items-center">
              <div className="h-[136px] relative w-full z-10">
                <div className=" w-full h-full m-auto flex flex-col justify-center items-center gap-2 absolute">
                  <div className="left-0 top-0 text-white text-[70px] font-bold leading-[91px] text-3xl static">80k+</div>
                  <div className="w-[100px] h-[0px] left-[28px] border-4 border-orange-400 static top-0"></div>
                  <div className="left-[14px] text-white font-bold leading-relaxed text-base static w-auto top-0 sm:text-xl">Total Download</div>
                </div>
              </div>
              <div className=" h-[136px] relative w-full z-10">
                <div className=" w-full h-full m-auto flex flex-col justify-center items-center gap-2 absolute">
                  <div className="left-0 top-0 text-white font-bold leading-[91px] text-[70px] static">25k+</div>
                  <div className="w-[100px] h-[0px] left-[28px] border-4 border-orange-400 static top-0"></div>
                  <div className="left-[14px] text-white font-bold leading-relaxed text-xl static w-auto top-0 ">Happy Users</div>
                </div>
              </div>
              <div className="h-[136px] relative w-full col-span-2 z-10">
                <div className=" w-full h-full m-auto flex flex-col justify-center items-center gap-2 absolute">
                  <div className="left-0 top-0 text-white text-[70px] font-bold leading-[91px] text-3xl static">35k+</div>
                  <div className="w-[100px] h-[0px] left-[28px] border-4 border-orange-400 static top-0"></div>
                  <div className="left-[14px] text-white font-bold leading-relaxed text-base static w-auto top-0">Great Reviews</div>
                </div>
              </div>
            </div>
            <div className="flex w-full absolute ">
              <img src={Map} alt="" className="w-1/2" />
              <img src={Map1} alt="" className="w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
