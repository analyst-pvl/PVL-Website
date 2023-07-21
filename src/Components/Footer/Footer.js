import React from "react";
import PVL_Logo from "../SVGs/PVL_Logo";
import Link from "next/link";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#060919] py-16  text-white">
      <div className="container flex justify-between items-start sm:flex-row flex-col gap-10">
        <div className="text-lg">
          <PVL_Logo />
          <p className="mt-9">
            12th Floor CIE Office, <br />B Block PES University, Outer Ring Road
          </p>
          <p className="mt-9">
            Privacy Policy- Terms & Conditions- Legal
            <br />© 2021 PVL All Rights Reserved
          </p>
          <div className="flex mt-9 gap-x-8">
            <Instagram />
            <LinkedIn />
          </div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4  text-base lg:text-xl gap-x-16 gap-y-10">
          <Link href="/venture-studio">Venture Studio</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/opportunities">Opportunities</Link>
          <Link href="/news">News</Link>
        </div>
      </div>
      <div className="bg-[#FFC947] h-[1px] w-3/5 mt-10 max-w-[1000px]"></div>
    </div>
  );
};

export default Footer;
