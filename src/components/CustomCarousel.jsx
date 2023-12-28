import React from "react";
import { Carousel } from "antd";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Testi6 from "../assets/testi6.png";

const testiMonials = [
  {
    id: 1,
    name: "Hasan Mahmud",
    job: "UI/UX Designer",
    img: Testi6,
    message: '"ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"',
  },
  {
    id: 2,
    name: "Hasan Mahmud",
    job: "UI/UX Designer",
    img: Testi6,
    message: '"ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"',
  },
  {
    id: 3,
    name: "Hasan Mahmud",
    job: "UI/UX Designer",
    img: Testi6,
    message: '"perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et "',
  },
];

const CustomCarousel = () => {
  const carouselRef = React.useRef();

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  return (
    <div className="w-full">
      <div className="w-full m-auto flex flex-col justify-between gap-10">
        <Carousel ref={carouselRef}>
          {/* Isi carousel di sini */}
          {testiMonials.map((res) => (
            <div className="w-full" key={res.id}>
              <div className="w-full h-1/2 mb-3  text-lg flex justify-center items-center">
                <p className="text-center">{res.message}</p>
              </div>
              <div className="w-full h-1/2 flex flex-col justify-center items-center gap-3 mb-6">
                <div className="lg:hidden">
                  <img src={res.img} alt="" className="rounded-full" />
                </div>
                <div className="text-center text-stone-500 font-medium ">
                  <div className=" text-[13px] leading-[20.80px]">{res.name}</div>
                  <div className=" text-[11px] font-normal leading-[17.60px]">{res.job}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="w-full h-[30px] flex justify-center gap-6 ">
          <div onClick={handlePrev} className="w-[30px] h-[30px] bg-orange-400 cursor-pointer">
            <FiChevronLeft className="w-[30px] h-[30px] text-white" />
          </div>
          <div onClick={handleNext} className="w-[30px] h-[30px] bg-orange-400 cursor-pointer">
            <FiChevronRight className="w-[30px] h-[30px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
