import Card from "../components/card";
import Icon from "../assets/icon.svg";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";

export default function FeatureSection() {
  return (
    <div className="w-full h-screen text-slate-800 font-roboto flex flex-col pt-5 pb-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <h5 className="text-center text-orange-400 text-sm font-bold tracking-[3.50px]">FEATURE</h5>
        <p className="text-center text-black font-bold mb-16 text-2xl">We features & solution your application</p>
      </div>
      <div className="container m-auto justify-between items-center flex-col h-full grid grid-cols-2">
        <Card poster={Icon} title="Easy To Customize" paraghraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint." />
        <Card poster={Icon1} title="Clean Code" paraghraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint." />
        <Card poster={Icon2} title="Redint Ready" paraghraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint." />
      </div>
    </div>
  );
}
