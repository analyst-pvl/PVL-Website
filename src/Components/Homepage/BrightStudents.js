import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const StudentsDiv = (props) => {
  return (
    <div className="flex items-center flex-col w-80">
      <div className="bg-[#FF2D46] h-16 w-16 rounded-full"></div>
      <p className="font-medium text-xl lg:text-2xl text-center mt-5">{props.parah}</p>
    </div>
  );
};

const BrightStudents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="flex justify-center items-center">
      <div
        className={`container py-16 lg:py-24 flex flex-col items-center lg:opacity-0 ${
          isVisible && "lg:animate-fade-in-top lg:opacity-100"
        }`}
        ref={inViewRef}
      >
        <h2 className="font-bold text-4xl lg:text-5xl text-center">
          Bright Students love us as
          <br /> we make
        </h2>
        <div className="flex items-start justify-center gap-16 lg:mt-24 mt-16 flex-wrap">
          <StudentsDiv parah="Academic FleAcademic flexibility & timing" />
          <StudentsDiv parah="Entrepreneurship safer & better from idea stage all the way to success" />
          <StudentsDiv parah="Comprehensive support" />
          <StudentsDiv parah="Angel approved" />
          <StudentsDiv parah="Career Insurance" />
        </div>
      </div>
    </div>
  );
};

export default BrightStudents;
