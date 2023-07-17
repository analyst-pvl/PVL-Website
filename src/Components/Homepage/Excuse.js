import React from "react";

const Card = (props) => {
  return (
    <div
      className={`${props.className} flex-1 h-60 rounded-3xl p-5 flex items-end`}
    >
      <h3 className="font-[Raleway] font-extrabold text-2xl text-white">
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
          <div className="w-[2500px] flex gap-x-12 ml-5 lg:ml-10">
            <Card
              className="bg-[#FFD707]"
              heading="I don't have/ not sure about the idea I have"
            />
            <Card
              className="bg-[#FF2D46]"
              heading="I want to gain experience in a good company"
            />
            <Card className="bg-[#2388FF]" heading="I need financial support" />
            <Card
              className="bg-[#FFD707]"
              heading="I dont have team & dont know how to build it"
            />
            <Card
              className="bg-[#FF2D46]"
              heading="I have loans/ bill to pay"
            />
            <Card className="bg-[#2388FF]" heading="I have to do my masters" />
            <Card
              className="bg-[#2388FF]"
              heading="I don't want my academics to be affected"
            />
            <Card
              className="bg-[#2388FF]"
              heading="Who will invest in my idea"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excuse;
