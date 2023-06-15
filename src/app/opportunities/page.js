"use client";
import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/NavBar/NavBar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import opportunitiesData from "../../../data/opportunities";
import Image from "next/image";

const Card = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex gap-x-10 mb-5 border-b-2 border-gray-600 items-center pb-5">
      <Image
        src={props.image}
        width={150}
        height={150}
        alt={props.title}
        priority={true}
        className="hidden sm:block"
      />
      <div className="flex-1">
        <h2 className="font-bold text-2xl">{props.title}</h2>
        <p className="font-medium mb-5 text-[#4C4C4C]">{props.des}</p>
        <div className="flex justify-end">
          <a href={props.link} target="_blank">
            <Image
              src="/poweredByAssert.png"
              height={52}
              width={130}
              alt="powered by Assert"
              priority={true}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [fadeOut, setFadeOut] = useState(0);

  const router = useRouter();

  const handlePageChange = (url) => {
    setFadeOut(1);
    setTimeout(() => {
      url == "/opportunities" ? setFadeOut(0) : router.push(url);
    }, 500);
  };

  return (
    <>
      <NavBar pageChange={handlePageChange} />
      <div
        className={`flex items-center justify-center mt-5  ${
          fadeOut
            ? "transition-all duration-500 opacity-0"
            : "animate-fade-in-up"
        }`}
      >
        <div className="container flex items-center justify-center flex-col max-w-[1000px]">
          <h1 className="text-5xl text-[#333] font-medium">Opportunities</h1>
          <p className="mt-5 lg:mt-10 text-center text-base lg:text-lg">
            We’re looking for fresh talent that is daring enough to venture into
            limitless opportunities. Check out our open positions below!
          </p>
          <div className="my-10 last:border-none">
            {opportunitiesData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                des={item.des}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
