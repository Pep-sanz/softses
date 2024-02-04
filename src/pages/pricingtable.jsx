import Button from "../components/button";

const pricingContent = [
  {
    id: 1,
    title: "FREE",
    price: "0",
    description: ["Unlimited Landing Pages", "Unlimited Team Members", "Unlimited Leads", "Unlimited Page Views", "Export in HTML/CSS"],
    footer: "Start by trying our service for 30 days free trial no credit card required.",
  },
  {
    id: 2,
    title: "Standard",
    price: "99",
    description: ["Unlimited Landing Pages", "Unlimited Team Members", "Unlimited Leads", "Unlimited Page Views", "Export in HTML/CSS"],
    footer: "Start by trying our service for 30 days free trial no credit card required.",
  },
  {
    id: 3,
    title: "Premium",
    price: "350",
    description: ["Unlimited Landing Pages", "Unlimited Team Members", "Unlimited Leads", "Unlimited Page Views", "Export in HTML/CSS"],
    footer: "Start by trying our service for 30 days free trial no credit card required.",
  },
];

export default function PricingTable() {
  return (
    <div className="w-full pt-16 flex flex-col justify-evenly items-center font-roboto mt-20 px-6">
      <div className="w-full text-center mb-10 font-bold">
        <h5 className="text-orange-400 text-sm tracking-[3.50px]">PRICING TABLE</h5>
        <p className="text-black leading-[52px] text-2xl">Choose your pricing plan</p>
      </div>
      <div className="w-full grid gap-6 md:grid-cols-2 lg:flex lg:flex-row">
          {pricingContent.map((res) => (
            <div key={res.id} className={`max-w-[370px] h-[596px] border shadow border-zinc-100 flex flex-col justify-evenly items-center bg-white rounded px-6 m-auto ${res.id === 3 ? 'md:col-span-2': ''}`}>
              <h5 className="text-black text-[40px] font-medium leading-[64px]">{res.title}</h5>
              <div className="w-full h-16 ">
                <div className="w-1/2 flex justify-center border-b-2 m-auto">
                  <div className=" text-blue-600 text-base font-medium leading-relaxed">$</div>
                  <span className="text-blue-600 text-[40px] font-medium leading-[64px]">{res.price}</span>
                  <span className="text-black text-base font-medium leading-[64px]">/mo</span>
                </div>
              </div>
              <ul className="flex flex-col justify-center items-center text-stone-500 text-[13px] font-medium leading-[42.90px]">
                {res.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Button text="Get Started" />
              <div className="w-full h-[38px] text-center text-neutral-400 text-[13px] font-normal leading-[20.80px]">Start by trying our service for 30 days free trial no credit card required.</div>
            </div>
          ))}
      </div>
    </div>
  );
}
