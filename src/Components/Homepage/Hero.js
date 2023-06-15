import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center pb-20 pt-36 lg:h-screen bg-[url('/heroBack.png')] bg-no-repeat bg-center bg-cover">
      <div className="w-4/5 sm:w-3/5 lg:w-2/5 max-w-[600px] flex flex-col items-center justify-center bg-[#0B0B0B] p-5 ">
        <h1 className="text-[#FFF8EE] text-center font-bold text-5xl md:text-7xl 2xl:text-8xl">
          MAKE YOUR IDEAS SEE LIGHT
        </h1>
        <p className="text-[#FFF8EECC] text-center mt-1.5 text-base md:text-xl 2xl:text-2xl">
          Fund integrated with a venture studio to take your ideas from concept
          to company
        </p>
        <button
          className="yellowButton font-medium mt-4"
          onClick={() => {
            window.open(
              "https://6inc.typeform.com/idea-submission#name=xxxxx&email=xxxxx&source=pvl&linkedin_url=xxxxx",
              "_blank"
            );
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
