import Card from "../components/card";

import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";

const blogFostContent = [
  {
    poster: Blog1,
    date: "22 April 2021",
    paraghraf: "Best domin name for student ever personalised...",
  },
  {
    poster: Blog2,
    date: "22 April 2021",
    paraghraf: "Best domin name for student ever personalised...",
  },
  {
    poster: Blog3,
    date: "22 April 2021",
    paraghraf: "Best domin name for student ever personalised...",
  },
];

export default function BlogPost() {
  return (
    <div className="container mx-auto flex flex-col justify-evenly items-center font-roboto px-6">
      <div className="w-full flex flex-col justify-center items-center mb-10 lg:mb-0">
        <h5 className="text-orange-400 text-sm font-bold tracking-[3.50px] mb-3">BLOG POST</h5>
        <p className="text-black font-bold text-2xl text-center">Latest insight post the our company</p>
      </div>
      <div className="w-full gap-5 flex flex-col justify-evenly items-center sm:grid grid-cols-2 lg:flex-row lg:flex">
      {blogFostContent.map((res,i)=>(
        <Card key={i} poster={res.poster} date={res.date} paraghraf={res.paraghraf} />
      ))}
      </div>
    </div>
  );
}
