import QuestionsSection from "./pages/QuestionsSection";
import FeatureSection from "./pages/FeatureSection";
import HeroSection from "./pages/heroSection";
import HowItWork from "./pages/howItWork";
import WorkProcess from "./pages/workProcess";
import PricingTable from "./pages/pricingtable";
import TestiMonials from "./pages/testiMonials";
import BlogPost from "./pages/blogPost";
import Download from "./pages/download";
import Footer from "./pages/footer";

export default function App() {
  return (
    <div className="w-full flex flex-col overflow-hidden">
      <HeroSection />
      <FeatureSection />
      <HowItWork />
      <QuestionsSection />
      <WorkProcess />
      <PricingTable />
      <TestiMonials />
      <BlogPost />
      <Download />
      <Footer /> 
    </div>
  );
}
