import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col items-center justify-center px-10">
      <h3 className="text-5xl lg:text-6xl font-bold text-center">
        {props.heading}
        <span className="text-[#FFD707]">+</span>
      </h3>
      <p className="mt-4 text-center">{props.parah}</p>
    </div>
  );
};

const Highlight = () => {
  return (
    <div className="bg-[#2388FF] flex items-center justify-center">
      <div className="flex items-center justify-between py-16 lg:py-24 xl:flex-row text-white container flex-col">
        <div>
          <h2 className="font-bold text-5xl lg:text-6xl mb-10">Highlight</h2>
        </div>
        <div className="flex lg:gap-x-10 items-center flex-col sm:flex-row sm:justify-around">
          <Card heading="10" parah="Startups Operated" />
          <div className="bg-white opacity-20 w-[1px] sm:h-20 my-5" />
          <Card heading="$200k" parah="Funding per startup" />
          <div className="bg-white opacity-20 w-[1px] sm:h-20 my-5" />
          <Card heading="6" parah="Female Founders" />
        </div>
      </div>
    </div>
  );
};

export default Highlight;
