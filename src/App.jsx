import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/heroSection";
import HowItWork from "./components/howItWork";

export default function App(){
  return(
    <div className="w-full h-full flex flex-col ">
    <HeroSection/>
    <FeatureSection/>
    <HowItWork/>
    </div>
  )
}