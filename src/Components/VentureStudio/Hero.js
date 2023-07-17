import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center pb-20 pt-36 lg:h-screen">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-20">
        <div className="lg:block flex flex-col items-center">
          <h1 className="font-bold text-4xl lg:text-5xl text-center lg:text-left">
            ANY BODY CAN <br />
            CREATE WITH PVL
          </h1>
          <button
            className="yellowButton py-6 px-8 mt-4 rounded-full font-medium"
            onClick={() => {
              window.open(
                "https://6inc.typeform.com/idea-submission#name=xxxxx&email=xxxxx&source=pvl&linkedin_url=xxxxx",
                "_blank"
              );
            }}
          >
            Get Started
          </button>
          <h4 className="font-bold text-2xl lg:text-4xl text-center lg:text-left mt-5 lg:mt-14">
            Discover projects : Build it with PVL
          </h4>
        </div>
        <Image
          src="/VetureStudio1.png"
          width={590}
          height={428}
          alt=""
          className="flex-1 w-full max-w-[590px]"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Hero;
