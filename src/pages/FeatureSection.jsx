import Card from "../components/card";
import Icon from "../assets/icon.svg";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";

export default function FeatureSection() {
  return (
    <div className="w-full h-screen text-slate-800 pt-60 pb-40 font-roboto max-sm:flex max-sm:flex-col max-sm:pt-5 max-sm:pb-5 bg-red-800 ">
      <div className="flex flex-col justify-center items-center gap-5">
        <h5 className="text-center text-orange-400 text-sm font-bold tracking-[3.50px]">FEATURE</h5>
        <p className="text-center text-black text-[40px] font-bold mb-16 max-sm:text-2xl">We features & solution your application</p>
      </div>
      <div className="container m-auto flex justify-between items-center max-sm:flex-col max-sm:h-full max-sm:grid max-sm:grid-cols-2">
        <Card poster={Icon} title="Easy To Customize" paraghraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint." />
        <Card poster={Icon1} title="Clean Code" paraghraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint." />
        <Card poster={Icon2} title="Redint Ready" paraghraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint." />
      </div>
    </div>
  );
}
