

export default function Card({poster,title,date,paraghraf}){
return(
    <div className="w-[370px] h-[407px] bg-white shadow flex flex-col justify-evenly items-start px-5 py-8 box-border font-roboto">
    <img src={poster} alt="" />
    <h5 className="text-center text-orange-400 text-2xl font-bold">{title}</h5>
    <div className="text-orange-400 text-[13px] font-normal">{date}</div>
    <p>{paraghraf}</p>
  </div>
)
}