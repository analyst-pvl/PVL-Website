import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
  return (
    <div className="drop-shadow-[0_0_100px_rgba(0,0,0,0.07)] w-full sm:flex-1 p-8 pb:4 lg:p-14 lg:pb-6 bg-[#FFF8EE] rounded-md flex flex-col justify-between items-center sm:items-start">
      <div>
        <h2 className="text-[#060919] font-bold text-4xl sm:text-left text-center">
          {props.heading}
        </h2>
        <p className="text-[#060919] opacity-70 text-xs my-3 sm:text-left text-center">
          {props.parah}
        </p>
      </div>
      <button
        className={`py-4 px-6 mt-5 ${props.buttonColor} text-white `}
        onClick={() => props.pageChange(props.link)}
      >
        {props.button}
      </button>
    </div>
  );
};

const Blogs = (props) => {
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
        className="container flex py-16 lg:py-24 justify-between gap-5"
        ref={inViewRef}
      >
        <Image
          src="/BlogsBack.png"
          width="405"
          height="252"
          alt=""
          className={`-ml-5 lg:-ml-10 flex-1 opacity-0 hidden lg:block  ${
            isVisible && "animate-fade-in-left opacity-100"
          }`}
        />
        <div className="flex items-center">
          <div
            className={`flex gap-6 items-stretch lg:opacity-0 flex-col sm:flex-row ${
              isVisible && "lg:animate-fade-in-right lg:opacity-100"
            }`}
          >
            <Card
              heading="Venture Studio"
              parah="We empower passionate entrepreneurs with funding, resources, mentoring, industry connects, basically whatever it takes!"
              button="How we build"
              buttonColor="redButton"
              pageChange={props.pageChange}
              link="/venture-studio"
            />
            <Card
              heading="Portfolio"
              parah="We work with students, researchers & entrepreneurs to build high impact ventures with global market opportunities"
              button="What we have built"
              buttonColor="blueButton"
              pageChange={props.pageChange}
              link="/portfolio"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
