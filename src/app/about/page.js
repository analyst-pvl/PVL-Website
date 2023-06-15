"use client";
import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/NavBar/NavBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hero = () => {
  return (
    <div className="mb-32 flex w-full gap-x-20 flex-col lg:flex-row ">
      <div className="mt-10 md:-mt-28 basis-3/5 flex justify-end">
        <div className="bg-[#FFF8EE] w-full mx-10 lg:w-4/5 rounded-[44px] md:p-16">
          <h1 className="text-[#232536] font-medium text-base text-center lg:text-left">
            ABOUT US
          </h1>
          <h2 className="text-[#232536] font-bold text-4xl lg:text-5xl tracking-tighter mt-4 text-center lg:text-left">
            The Full Story
          </h2>
        </div>
      </div>
      <div className="basis-2/5 text-sm lg:text-base text-center mt-10 md:mt-20 bg-[#FFF8EE] w-4/5 mx-auto lg:text-left">
        <p>
          PESU Venture Labs is a venture studio launched under the partnership
          of PESU and COCreate Ventures. We are a fund equipped with execution
          and acceleration capabilities. Our main objective is to enable the
          finest and the most dedicated students to become entrepreneurs. We
          also want to find solutions to these questions - ‘Can entrepreneurship
          fund research & scholarships?’ and ‘Can we create a funnel of fundable
          deep tech companies that are category creators for the existing VC
          ecosystem?
        </p>
      </div>
    </div>
  );
};

const PESU = () => {
  return (
    <div>
      <div className="flex gap-x-20 gap-y-10 mb-32 flex-col lg:flex-row">
        <div className="basis-2/5 bg-[#FFF8EE] flex items-center flex-col lg:block">
          <h3 className="text-[#232536] font-bold text-4xl lg:text-[52px] tracking-tighter text-center lg:text-left">
            PESU
          </h3>
          <p className="text-[#232536] text-sm lg:text-base text-center w-4/5 mx-auto lg:text-left lg:mx-0">
            PESU is one of the top 10 universities in India attracting some of
            the best brains in the country for research & studies. PESU has
            special focus on developing entrepreneurship through Centre for
            Inovation and Entrepreneurship (CIE).
          </p>
          <a href="https://pes.edu/" target="_blank">
            https://pes.edu/
          </a>
        </div>
        <div className="basis-3/5">
          <Image
            src="/PESU.png"
            width={624}
            height={326}
            className="w-full"
            alt="PESU shot"
          />
        </div>
      </div>
    </div>
  );
};

const CoCreate = () => {
  return (
    <div className="flex gap-x-20 gap-y-10 mb-32 flex-col-reverse lg:flex-row">
      <div className="basis-3/5">
        <Image
          src="/PESU.png"
          width={624}
          height={326}
          className="w-full"
          alt="PESU shot"
        />
      </div>
      <div className="basis-2/5 bg-[#FFF8EE]">
        <h3 className="text-[#232536] font-bold text-4xl lg:text-[52px] tracking-tighter text-center lg:text-left lg:mx-0">
          CoCreate
        </h3>
        <p className="text-[#232536] text-sm lg:text-base text-center w-4/5 mx-auto  lg:text-left lg:mx-0">
          CoCreate is focused on strengthening the startup ecosystem by
          operating micro funds to help build marvellous deep tech startups.
          CoCreate also concentrates on transforming great consumer-focused
          businesses, having transformed companies like JustBooks.in, Bonhomia
          amongst others. Through its concern Upaghna, we are helping many
          exceptional consumer product companies.
        </p>
      </div>
    </div>
  );
};

const Page = () => {
  const [fadeOut, setFadeOut] = useState(0);
  const [loaded, setLoaded] = useState(0);

  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePageChange = (url) => {
    setFadeOut(1);
    setTimeout(() => {
      url == "/about" ? setFadeOut(0) : router.push(url);
    }, 500);
  };

  setTimeout(() => setLoaded(1), 500);

  return (
    <>
      <NavBar pageChange={handlePageChange} />
      <div className="flex items-center justify-center">
        <div
          className={`container mt-10 relative overflow-hidden ${
            fadeOut
              ? "transition-all duration-500 opacity-0"
              : "animate-fade-in"
          }`}
        >
          <div>
            <Image
              src="/aboutSide.png"
              width={420}
              height={2000}
              className={`absolute top-0  w-1/4 -left-1/4 opacity-0 ${
                loaded &&
                "transition-all duration-500 h-full contain -left-[17.5%] opacity-100"
              }`}
              alt=""
              priority={true}
            />
          </div>
          <div className="z-10 relative">
            <Image
              src="/AboutUs.png"
              width={1280}
              height={444}
              alt=""
              className="w-full"
            />
            <Hero />
            <PESU />
            <CoCreate />
          </div>
          <div>
            <Image
              src="/aboutSide.png"
              width={420}
              height={2000}
              className={`absolute top-0  w-1/4 -right-1/4 opacity-0 ${
                loaded &&
                "transition-all duration-500 h-full contain -right-[17.5%] opacity-100"
              }`}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
