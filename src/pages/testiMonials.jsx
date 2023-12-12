import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Testi1 from "../assets/testi1.png";
import Testi2 from "../assets/testi2.png";
import Testi3 from "../assets/testi3.png";
import Testi4 from "../assets/testi4.png";
import Testi5 from "../assets/testi5.png";
import Testi6 from "../assets/testi6.png";

export default function TestiMonials() {
  return (
    <div className="bg-bgSilver w-full h-screen flex justify-between items-center pt-10 pb-20 font-roboto flex-col lg:flex-row lg:justify-evenly lg:pb-0">
      <div className="lg:hidden">
        <h5 className="text-orange-400 text-2xl font-bold tracking-[3.50px]">TestiMonials</h5>
      </div>
      <div className="h-1/2 flex flex-col items-center w-full justify-center  lg:w-1/2 lg:justify-center">
        <p className="container h-[85px] text-center text-black font-medium leading-[28.80px] text-base mb-10">
          &#34;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi&#34;
        </p>
        <div className="w-1/2 flex flex-col justify-center items-center mb-10">
          <div className="flex flex-col justify-center items-center gap-3 ">
            <img src={Testi6} alt="" className=" rounded-full lg:hidden" />
          <div className="text-center text-stone-500 font-medium ">
            <div className=" text-[13px] leading-[20.80px]">Hasan Mahmud</div>
            <div className=" text-[11px] font-normal leading-[17.60px]">UI/UX Designer</div>
          </div>
          </div>
        </div>
        <div className="w-[75px] h-[30px] flex justify-between">
          <div className="w-[30px] h-[30px] bg-orange-400">
            <FiChevronLeft className="w-[30px] h-[30px] text-white" />
          </div>
          <div className="w-[30px] h-[30px] bg-orange-400">
            <FiChevronRight className="w-[30px] h-[30px] text-white" />
          </div>
        </div>
      </div>
      <div className="w-[430px] h-[430px] rounded-full border lg:flex justify-center items-center relative hidden ">
        <div className="w-[430px] h-[430px] relative">
          <img src={Testi2} alt="" className=" rounded-full absolute " />
          <img src={Testi3} alt="" className=" rounded-full absolute -top-5 right-20" />
          <img src={Testi4} alt="" className=" rounded-full absolute -right-5 bottom-16 " />
          <img src={Testi5} alt="" className=" rounded-full absolute -bottom-10 right-40  " />
          <img src={Testi6} alt="" className=" rounded-full absolute bottom-28 -left-10 " />
        </div>
        <div className="w-60 h-60 rounded-full border flex justify-center items-center absolute">
          <img src={Testi1} alt="" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}
