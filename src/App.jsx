import FeatureSection from "./pages/FeatureSection";
import QuestionsSection from "./pages/QuestionsSection";
import BlogPost from "./pages/blogPost";
import Download from "./pages/download";
import HeroSection from "./pages/heroSection";
import HowItWork from "./pages/howItWork";
import PricingTable from "./pages/pricingtable";
import TestiMonials from "./pages/testiMonials";
import WorkProcess from "./pages/workProcess";
import Navbar from "./components/navbar";
import Footer from "./pages/footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
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
