import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center pb-20 pt-36 lg:h-screen">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-20">
        <div className="lg:block flex flex-col items-center">
          <h1 className="font-bold text-4xl lg:text-5xl text-center lg:text-left">
            ANY BODY CAN CREATE <br />
            WITH PVL
          </h1>
          <h4 className="font-bold text-4xl lg:text-5xl text-center lg:text-left">
          Zero Commitment : Infinite Possibilities
          </h4>
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
