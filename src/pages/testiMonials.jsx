import Testi1 from "../assets/testi1.png";
import Testi2 from "../assets/testi2.png";
import Testi3 from "../assets/testi3.png";
import Testi4 from "../assets/testi4.png";
import Testi5 from "../assets/testi5.png";
import Testi6 from "../assets/testi6.png";
import CustomCarousel from "../components/CustomCarousel";

export default function TestiMonials() {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-16 gap-24 px-6 lg:flex-row lg:gap-0 lg:justify-evenly">
      <div className="lg:hidden text-center my-6 md:my-0">
        <h5 className="text-orange-400 text-2xl font-bold tracking-[3.50px]">TestiMonials</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quod?</p>
      </div>
      <div className="w-full lg:w-1/2">
        <CustomCarousel />
      </div>
      <div className="w-[430px] h-[430px] rounded-full border lg:flex justify-center items-center relative hidden ">
        <div className="w-full h-[430px] relative">
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
