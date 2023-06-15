import Image from "next/image";
import React from "react";
import Star from "./SVGs/Star";
import Lighting from "./SVGs/Lighting";
import Screens from "./SVGs/Screens";
import Boxes from "./SVGs/Boxes";
import Legal from "./SVGs/Legal";

const ValueDiv = (props) => {
  return (
    <div className="basis-[42%] md:basis-auto flex flex-col items-center lg:items-start">
      {props.children}
      <p className="font-medium text-xl lg:text-2xl max-w-[220px]  text-center lg:text-start">{props.value}</p>
    </div>
  );
};

const CompaniesValues = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container py-16 lg:py-24 flex gap-5 flex-col justify-center lg:flex-row items-center">
        <div className="max-w-[800px] lg:w-3/5">
          <h2 className="font-bold text-4xl lg:text-5xl text-center lg:text-start">
            PVL creates companies <br />
            that are clearly different
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start mt-16 gap-14">
            <ValueDiv value="Brightest in Academics">
              <Star />
            </ValueDiv>
            <ValueDiv value="Teams with high energy">
              <Lighting />
            </ValueDiv>
            <ValueDiv value="Digital compliance">
              <Screens />
            </ValueDiv>
            <ValueDiv value="Brand compliance">
              <Boxes />
            </ValueDiv>
            <ValueDiv value="Legal compliance">
              <Legal />
            </ValueDiv>
          </div>
        </div>
        <Image
          src="/CompanyValues.png"
          height="200"
          width="400"
          alt=""
          className="object-contain flex-1 -ml-5 hidden lg:-ml-10 lg:block"
        />
      </div>
    </div>
  );
};

export default CompaniesValues;
