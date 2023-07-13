import Image from "next/image";
import React from "react";

const ProcessDiv = (props) => {
  return (
    <div
      className={`flex gap-x-6 pb-2.5 mb-2.5 ${
        props.border && "border-b border-[#0B0B0B]"
      }`}
    >
      <p className="text-[#2388FF] font-bold  text-5xl lg:text-6xl">
        {props.step}
      </p>
      <div>
        <div className="flex items-center">
          <h3 className="font-medium text-3xl lg:text-4xl">{props.heading}</h3>
        </div>
        <p className="text-base lg:text-lg">{props.parah}</p>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="container pt-24 flex flex-col justify-between md:flex-row items-center md:items-stretch">
        <div className="flex flex-col justify-between">
          <div className="flex md:block items-center justify-center flex-col">
            <div className="w-24 h-2 bg-[#0B0B0B]" />
            <h2 className="font-extrabold text-5xl lg:text-6xl mt-5">
              Process
            </h2>
          </div>
          <Image
            src="/VetureStudio2.png"
            height={305}
            width={520}
            alt=""
            className="-ml-5 lg:-ml-10 hidden md:block"
          />
        </div>
        <div className="mt-10 md:mt-5 w-full max-w-[520px] last:border-white mb-24">
          <ProcessDiv
            step="01"
            heading="Choose an Idea"
            parah="Come with your own project idea, or pick from one of our identified interesting industry-wide problems, backed by corporates"
            border
          />
          <ProcessDiv
            step="02"
            heading="Build"
            parah="Plan & build out your project over the course of the next few months with all the support from us"
            border
          />
          <ProcessDiv
            step="03"
            heading="Complete"
            parah="Finish your project with the right teammates and showcase your newly gained skills on your resume"
            border
          />
          <ProcessDiv
            step="04"
            heading="Exit & Iterate"
            parah="Generate value in 1 of 3 ways with your project: Get Acquired and Paid by Us; Create your Startup; Go for External Funding"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
