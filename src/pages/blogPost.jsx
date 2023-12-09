import Card from "../components/card";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";

export default function BlogPost() {
  return (
    <div className="w-full h-screen flex flex-col justify-evenly items-center font-roboto">
      <div className="w-full flex flex-col justify-center items-center">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px]">BLOG POST</h5>
        <p className="text-black text-[40px] font-bold leading-[52px]">Latest insight post the our company</p>
      </div>
      <div className="w-full flex justify-evenly items-center">
        <Card
          poster={Blog1}
          date="22 April 2021"
          paraghraf="Best domin name for student
        ever personalised..."
        />
        <Card
          poster={Blog2}
          date="22 April 2021"
          paraghraf="Saas landing pagee solution
        for loans our company..."
        />
        <Card
          poster={Blog3}
          date="22 April 2021"
          paraghraf="Custom platform for insurane
        an audit..."
        />
      </div>
    </div>
  );
}
