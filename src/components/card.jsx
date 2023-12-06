

export default function Card({poster,title}){
return(
    <div className="w-[370px] h-[276px] bg-white shadow flex flex-col justify-evenly items-start px-5 py-8 box-border">
    <img src={poster} alt="" />
    <h5 className="text-center text-orange-400 text-2xl font-bold font-['Roboto']">{title}</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint.</p>
  </div>
)
}