"use client";
import React, { useState } from "react";

const NewsCard = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`rounded-lg border border-black font-bold text-base flex flex-col relative bg-[#F0F0F0] transition-all duration-300 ${
        hover && "bg-[#FFFFFF]"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(true)}
      onTouchEnd={() => setHover(false)}
      onClick={() => {
        window.open(props.data.link, "_blank");
      }}
    >
      <div
        className={`absolute w-full h-full bg-red-400 rounded-lg -z-10  transition-all duration-300 ${
          hover && "rotate-3"
        }`}
      ></div>
      <img
        className="h-28 bg-white rounded-lg object-center"
        src={props.data.thumbnail}
      ></img>
      <div className="p-5 flex flex-col justify-between flex-1">
        <h3 className="lg:w-4/5">{props.data.title}</h3>
        <div className="flex justify-between mt-10 items-end">
          <p className="font-normal text-sm">{props.date}</p>
          <button
            className={`border border-[#FFC53E] rounded text-xs  px-3 py-2 duration-300 ${
              hover ? "text-white bg-[#FFC53E]" : "text-[#FFC53E]"
            }`}
            onClick={() => {
              window.open(props.data.link, "_blank");
            }}
          >
            Read full article
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
