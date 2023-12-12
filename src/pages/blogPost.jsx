import Card from "../components/card";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";

export default function BlogPost() {
  return (
    <div className="container h-screen flex flex-col justify-evenly m-auto items-center font-roboto mt-28 ">
      <div className="w-full flex flex-col justify-center items-center mb-10 lg:mb-0">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px] mb-3">BLOG POST</h5>
        <p className="text-black font-bold text-2xl text-center">Latest insight post the our company</p>
      </div>
      <div className="w-full grid grid-cols-2 gap-5 lg:flex lg:justify-evenly lg:items-center">
        <div className="m-auto">
          <Card
            poster={Blog1}
            date="22 April 2021"
            paraghraf="Best domin name for student
        ever personalised..."
          />
        </div>
        <div className="m-auto">
          <Card
            poster={Blog2}
            date="22 April 2021"
            paraghraf="Saas landing pagee solution
        for loans our company..."
          />
        </div>
        <div className="m-auto">
          <Card
            poster={Blog3}
            date="22 April 2021"
            paraghraf="Custom platform for insurane
        an audit..."
          />
        </div>
      </div>
    </div>
  );
}
