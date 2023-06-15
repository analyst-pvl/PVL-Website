import React, { useEffect, useState } from "react";
import IdeaStage from "./SVGs/IdeaStage";
import Incubation from "./SVGs/Incubation";
import HandHolding from "./SVGs/HandHolding";
import { useInView } from "react-intersection-observer";

const Funding = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="flex items-center justify-center">
      <div
        className="flex items-center flex-col md:flex-row gap-x-8 gap-y-12 justify-around container py-16 lg:py-24"
        ref={inViewRef}
      >
        <div
          className={`max-w-[540px] flex flex-col items-center md:items-start w-full lg:opacity-0 ${
            isVisible && "lg:animate-fade-in-left lg:opacity-100"
          }`}
        >
          <h2 className="font-bold text-5xl lg:text-6xl text-center md:text-start">
            Up to $200K funding
          </h2>
          <p className="text-lg lg:text-xl font-normal mt-2 md:w-2/3 text-center md:text-start">
            In startups with DeepTech as a differentiator created in our Venture
            Studios
          </p>
          <button
            className="font-medium text-base text-white py-6 px-8 redButton mt-8"
            onClick={() => props.pageChange("/portfolio")}
          >
            What we have built
          </button>
        </div>
        <div
          className={`flex flex-col gap-y-16 max-w-[410px] w-full lg:opacity-0 md:flex-col ${
            isVisible && "lg:animate-fade-in-right lg:opacity-100"
          }`}
        >
          <div className="flex gap-x-6 flex-col md:flex-row items-center ">
            <div>
              <IdeaStage />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-center md:text-left">
                Idea stage
              </h3>
              <p className="text-base font-normal mt-2 text-center md:text-left">
                Reduced time to Market
              </p>
            </div>
          </div>
          <div className="flex gap-x-6 flex-col md:flex-row  items-center">
            <div>
              <Incubation />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-center md:text-left">
                Incubation + acceleration
              </h3>
              <p className="text-base font-normal mt-2 text-center md:text-left">
                Quicker pivots to determine the right Product Market Fit
              </p>
            </div>
          </div>
          <div className="flex gap-x-6 flex-col md:flex-row  items-center">
            <div>
              <HandHolding />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-center md:text-left">
                Mentoring & handholding
              </h3>
              <p className="text-base font-normal mt-2 text-center md:text-left">
                Founder friendly terms ( No LP, dragalong, tagalong, no special
                rights)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding;
