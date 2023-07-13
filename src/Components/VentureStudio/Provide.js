import React from "react";
import LargeGlobalMarkets from "../SVGs/LargeGlobalMarkets";
import Dollar from "./SVGs/Dollar";
import HandHolding from "./SVGs/HandHolding";

const Card = (props) => {
  return (
    <div className="md:w-[calc(50%-32px)] lg:w-auto lg:flex-1 bg-[#FFF8EE] rounded-[20px] px-5 py-14 drop-shadow-[0_0_100px_rgba(0,0,0,0.07)] flex items-center flex-col">
      <div className="mx-auto flex items-center justify-center">
        <div className="flex items-center justify-center bg-[#FFD707] w-16 h-16 rounded-full">
          {props.children}
        </div>
      </div>
      <h2 className="text-center font-bold text-2xl my-7">{props.heading}</h2>
      <p className="text-center font-medium text-base opacity-70">
        {props.parah}
      </p>
    </div>
  );
};

const Provide = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container py-16 lg:py-24">
        <h2 className="text-[#060919] text-5xl lg:text-6xl font-bold text-center">
          What We Provide
        </h2>
        <div className="flex flex-wrap flex-col md:flex-row lg:mt-24 mt-16 gap-8 justify-center">
          <Card
            heading="Resources"
            parah="Access to infrastructure for all your requirements: AWS Cloud credits, Tech & Computing infra, Design & Other Resources"
          >
            <LargeGlobalMarkets />
          </Card>
          <Card
            heading="Funding & Support"
            parah="Financial Support, No Operational Overhead, Finding the right team"
          >
            <Dollar />
          </Card>
          <Card
            heading="Mentoring"
            parah="Hands-On Personalised Coaching, Mentoring by Industry Experts, Extensive Network Of Talent Pool and Investor Access"
          >
            <HandHolding />
          </Card>
        </div>
        <h5 className="text-[#060919] text-5xl lg:text-3xl font-bold text-center">
          <br /> <br />Driven to complete your project, without anxiety on commitments/risks
        </h5>
      </div>
    </div>
  );
};

export default Provide;
