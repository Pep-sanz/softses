import Card from "../components/card";
import Icon from "../assets/icon.svg";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";

const features = [
  { poster: Icon, title: "Easy To Customize", paraghraf: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint." },
  { poster: Icon1, title: "Clean Code", paraghraf: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint." },
  { poster: Icon2, title: "Redint Ready", paraghraf: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint." },
];
export default function FeatureSection() {
  return (
    <div className="w-full lg:h-screen text-slate-800 font-roboto flex flex-col pt-28 px-6 items-center "  id="feature">
      <div className="flex flex-col justify-center items-center gap-5 mb-28">
        <h5 className="text-center text-orange-400 text-sm font-bold tracking-[3.50px]">FEATURE</h5>
        <p className="text-center text-black font-bold text-2xl">We features & solution your application</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between items-center gap-5">
        {features.map((res, i) => (
          <Card key={i} poster={res.poster} title={res.title} paraghraf={res.paraghraf} />
        ))}
      </div>
    </div>
  );
}
