import React from "react";

const Card = (props) => {
  return (
    <div className={`${props.className} flex-1 h-60 lg:h-80 rounded-3xl p-5 flex items-end`}>
      <h3 className="font-[Raleway] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white lg:w-4/6">
        {props.heading}
      </h3>
    </div>
  );
};

const Excuse = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container py-16 lg:py-24">
        <h2 className="text-[#060919] text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
          What&apos;s your Excuse to startup
        </h2>
        <div className="overflow-x-scroll pb-10 lg:mt-24 mt-16 -mx-5 lg:-mx-10">
          <div className="w-[1800px] lg:w-[2500px] flex gap-x-12 ml-5 lg:ml-10">
            <Card
              className="bg-[#FFD707]"
              heading="I am not sure about the idea I have"
            />
            <Card
              className="bg-[#FF2D46]"
              heading="I am not sure about the idea I have"
            />
            <Card
              className="bg-[#2388FF]"
              heading="I am not sure about the idea I have"
            />
            <Card
              className="bg-[#FFD707]"
              heading="I am not sure about the idea I have"
            />
            <Card
              className="bg-[#FF2D46]"
              heading="I am not sure about the idea I have"
            />
            <Card
              className="bg-[#2388FF]"
              heading="I am not sure about the idea I have"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excuse;
