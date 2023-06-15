import React from "react";

const Programs = () => {
  return (
    <div className="flex items-center justify-center bg-[url('/programsBack.png')] lg:bg-no-repeat bg-contain lg:bg-cover py-10">
      <div className="container flex justify-between items-center flex-col gap-y-10 lg:flex-row">
        <h2 className="text-5xl lg:text-6xl font-bold w-80">Our Programs</h2>
        <div className="flex gap-10 items-start sm:flex-row flex-col">
          <div className="bg-[#FFF8EE] w-64 rounded drop-shadow-[0_16px_28px_rgba(24,92,255,0.04)] p-6">
            <div className="w-10 h-10 bg-[#2388ff] rounded-full" />
            <h3 className="text-3xl font-bold mt-4">Pebble</h3>
            <p className="text-base mt-2 font-medium">
              Community of innovators & startup enthusiasts in the college
              Invites to special sessions & workshops by global VC&apos;s,
              unicorn entrepreneurs & achievers in campus.
              <br />
              <br />
            </p>
          </div>
          <div className="bg-[#FFF8EE] w-64 rounded drop-shadow-[0_16px_28px_rgba(24,92,255,0.04)] p-6 sm:mt-24">
            <div className="w-10 h-10 bg-[#2388ff] rounded-full" />
            <h3 className="text-3xl font-bold mt-4">Capstone Project</h3>
            <p className="text-base mt-2 font-medium">
              Crews are small gatherings of 10-15 people who meet in person or
              online to hang, discuss a recent Sunday message, and pray
              together.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
