

export default function Card({poster,title,date,paraghraf}){
return(
    <div className=" bg-white shadow flex flex-col justify-evenly items-start px-5 py-8 box-border font-roboto w-full h- gap-1 lg:w-[370px] lg:h-[276px]">
    <img src={poster} alt="" />
    <h5 className="text-center text-orange-400 font-bold text-base lg:text-2xl">{title}</h5>
    <div className="text-orange-400 text-[13px] font-normal">{date}</div>
    <p className="text-xs lg:text-[13px]">{paraghraf}</p>
  </div>
)
}