import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="h-80 max-w-[290px] min-w-[290px] flex-1 rounded-lg overflow-hidden relative flex flex-col justify-end "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`h-full w-full -z-10 bg-cover bg-no-repeat absolute top-0 transition-all duration-300 ${
          props.image
        } ${hover ? "scale-110" : ""}`}
      ></div>
      <div
        className={`relative transition-all duration-300 ${
          hover ? "bottom-0" : "-bottom-[calc(100%-11rem)]"
        }`}
      >
        <div className={`${props.gradient} h-20`}></div>
        <h3
          className={`px-8  font-bold transition-all duration-300 pb-3 ${
            props.background
          } ${hover ? "text-lg" : "text-2xl"}`}
        >
          {props.heading}
        </h3>
        <div className={`px-8 pb-6 ${props.background}`}>
          <p
            className={`font-medium text-sm transition-all duration-300 h-32 ${
              hover ? "opacity-1 " : "opacity-0"
            }`}
          >
            {props.parah}
          </p>
        </div>
      </div>
    </div>
  );
};

const Who = () => {
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
      <div className="py-16 lg:py-24 container" ref={inViewRef}>
        <h2
          className={`font-medium text-5xl lg:text-6xl text-center lg:opacity-0 ${
            isVisible && "lg:animate-fade-in-up lg:opacity-100"
          }`}
        >
          Who We Are Looking For
        </h2>
        <div
          className={`lg:mt-24 mt-16 flex justify-around flex-wrap text-[#FFF8EE] lg:opacity-0  gap-10 ${
            isVisible && "lg:animate-fade-in-down lg:opacity-100"
          }`}
        >
          <Card
            image="bg-[url('/Students.png')]"
            gradient="bg-gradient-to-t from-[#FF2D46]"
            background="bg-[#FF2D46]"
            heading="Students"
            parah="We help students find a balance between academics and
            entrepreneurship. We employ models that ensure great rewards and
            security to students in terms of finance and careers."
          />
          <Card
            image="bg-[url('/Professionals.png')]"
            gradient="bg-gradient-to-t from-[#2388FF]"
            background="bg-[#2388FF]"
            heading="Professionals"
            parah="We deliver everything that helps you transform your idea to a business. We act like your cofounders and bring in team, expertise, mentoring, capital and infrastructure."
          />
          <Card
            image="bg-[url('/Faculty.png')]"
            gradient="bg-gradient-to-t from-[#FF9B00]"
            background="bg-[#FF9B00]"
            heading="Faculty"
            parah="We enable academicians to balance their teaching and research. Models where academicians can spend more time on research or development with substantial commercial value will be followed."
          />
        </div>
      </div>
    </div>
  );
};

export default Who;
