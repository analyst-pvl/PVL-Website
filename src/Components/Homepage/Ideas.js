import React from "react";
import CatergoryCreators from "./SVGs/CatergoryCreators";
import DeeptechInnovation from "./SVGs/DeeptechInnovation";
import LargeGlobalMarkets from "../SVGs/LargeGlobalMarkets";

const Card = (props) => {
  return (
    <div className="md:w-[calc(50%-32px)] lg:w-auto lg:flex-1 bg-[#FFF8EE] rounded-[20px] px-5 py-14 drop-shadow-[0_0_100px_rgba(0,0,0,0.07)] flex items-center flex-col">
      <div className="mx-auto flex items-center justify-center">
        <div className="flex items-center justify-center bg-[#FFD707] w-16 h-16 rounded-full">{props.children}</div>
      </div>
      <h2 className="text-center font-bold text-2xl my-7">{props.heading}</h2>
      <p className="text-center font-medium text-base opacity-70 max-w-xl">
        {props.parah}
      </p>
    </div>
  );
};

const Ideas = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container py-16 lg:py-24">
        <h2 className="text-[#060919] text-5xl lg:text-6xl font-bold text-center">
          Ideas We&apos;re Interested In
        </h2>
        <div className="flex flex-wrap flex-col md:flex-row lg:mt-24 mt-16 gap-8 justify-center">
          <Card
            heading="Deeptech & Innovation"
            parah="Ideas around IoT, Automation, Extended Reality (AR,ER,VR), quantum computing, AI/ML, personalized and predictive medicine"
          >
            <LargeGlobalMarkets />
          </Card>
          <Card
            heading="Category Creators"
            parah="Ideas that can transform the way academic programs are created and delivered"
          >
            <CatergoryCreators />
          </Card>
          <Card
            heading="Deeptech & Innovation"
            parah="Ideas that can transform the way academic programs are created and delivered"
          >
            <DeeptechInnovation />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
