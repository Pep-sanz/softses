



// eslint-disable-next-line react/prop-types
export default function Card({poster,date,title,paraghraf}) {
  return (
    <>
      <div className="max-w-[370px] mx-auto my-3 bg-white shadow flex flex-col justify-evenly items-start px-5 py-8 box-border font-roboto gap-3 sm:w-auto">
           <img src={poster} alt="" />
           <h5 className="text-center text-orange-400 font-bold text-lg lg:text-2xl">{title}</h5>
           <div className="text-orange-400 text-[13px] font-normal">{date}</div>
           <p className="text-sm lg:text-[13px]">{paraghraf}</p>
      </div>
    </>
  );
}
