"use client";
import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/NavBar/NavBar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import data from "../../../data/protfolio";
import { useRouter } from "next/navigation";

const Card = (props) => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseLeave = () => {
    setHover(false);
    props.handleTextChange("", "");
  };

  const handleMouseEnter = () => {
    setHover(true);
    props.handleTextChange(props.name, props.des);
  };

  return (
    <>
      <a href={props.link} target="_blank">
        <div
          className={`relative w-full pt-[100%]  drop-shadow-[0_0_100px_rgba(0,0,0,0.07)] flex items-center justify-center rounded-xl transition-all duration-300 ${
            hover ? props.color : "bg-[#FFF8EE]"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          <div
            className={`absolute w-full h-full top-0 left-0 flex items-center justify-center transition-all duration-300  ${
              hover ? "saturate-[100%] first:scale-110" : "saturate-[5%]"
            }`}
          >
            {props.children}
          </div>
        </div>
      </a>
    </>
  );
};

const Page = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [textFadeOut, settextFadeOut] = useState(false);
  const [parah, setParah] = useState("");
  const [title, setTitle] = useState("Portfolio");

  const router = useRouter();

  const handlePageChange = (url) => {
    setFadeOut(true);
    setTimeout(() => {
      url == "/portfolio" ? setFadeOut(false) : router.push(url);
    }, 500);
  };

  const handleTextChange = (name, des) => {
    settextFadeOut(1);
    setTimeout(() => {
      setTitle(name != "" ? name : "Portfolio");
      setParah(des);
      settextFadeOut(0);
    }, 500);
  };

  return (
    <>
      <NavBar pageChange={handlePageChange} />
      <div
        className={`flex items-center justify-center ${
          fadeOut
            ? "transition-all duration-500 opacity-0"
            : "animate-fade-in-up"
        }`}
      >
        <div className="flex mt-5 gap-x-8 max-w-[1500px] w-full">
          <div className="w-[280px] min-w-[200px] flex flex-col justify-between h-[calc(100vh-88px)] lg:basis-1/3 sticky top-[108px]">
            <div className="mx-10 transition-all duration-500">
              <h1
                className={`text-4xl lg:text-5xl text-[#333] font-medium mb-5 transition-all duration-500 ${
                  textFadeOut ? "opacity-0" : "opacity-100"
                }`}
              >
                {title}
              </h1>
              <div className="bg-gray-600 h-[1px]" />
              <p
                className={`mt-10 transition-all duration-500 text-sm lg:text-base ${
                  textFadeOut ? "opacity-0" : "opacity-100"
                }`}
              >
                {parah}
              </p>
            </div>
            <Image
              src="/VetureStudio2.png"
              width={520}
              height={305}
              alt=""
              className="-ml-24"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-5 mb-20 mr-5 w-full">
            {data.map((item, index) => (
              <Card
                key={index}
                color={item.color}
                name={item.name}
                des={item.description}
                handleTextChange={handleTextChange}
                link={item.link}
              >
                <Image
                  src={item.url}
                  height={item.ImgHeight}
                  width={item.ImgWidth}
                  alt={item.name}
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
