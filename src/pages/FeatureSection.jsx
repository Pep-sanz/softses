import Envato from "../assets/envato.svg";
import Docean from "../assets/3docean.svg";
import Graph from "../assets/graphicrever.svg";
import Kanba from "../assets/kanba.svg";
import Card from "../components/card";
import Icon from "../assets/icon.svg";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";

export default function FeatureSection() {
  return (
    <div className="text-slate-800 mt-60 mb-40 font-roboto">
      <div className="container m-auto w-full h-64 flex justify-between items-center">
        <img src={Envato} alt="" className="w-[231px] h-[50px]" />
        <img src={Docean} alt="" className="w-[231px] h-[50px]" />
        <img src={Graph} alt="" className="w-[231px] h-[50px]" />
        <img src={Kanba} alt="" className="w-[231px] h-[50px]" />
      </div>
      <div className="text-center text-orange-400 text-sm font-bold tracking-[3.50px]">FEATURE</div>
      <div className="text-center text-black text-[40px] font-bold mb-16">We features & solution your application</div>
      <div className="container m-auto flex justify-between items-center">
        <Card poster={Icon} title="Easy To Customize" paraghraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint." />
        <Card poster={Icon1} title="Clean Code" paraghraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint." />
        <Card poster={Icon2} title="Redint Ready" paraghraf="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quam assumenda mollitia deserunt ipsum sint." />
      </div>
    </div>
  );
}
