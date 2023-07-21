import React, { useState } from "react";
import PVL_Logo from "../SVGs/PVL_Logo";
import Link from "next/link";

const NavBar = (props) => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-[#FFC53E] transition ease transform duration-300`;

  return (
    <div
      className={`top-0 w-full bg-[#0B0B0B4D] backdrop-blur-2xl z-50 ${
        props.shouldCover ? "fixed" : "sticky"
      } `}
    >
      <div className={`flex items-center justify-center `}>
        <div className="max-w-[1500px] w-full px-5 py-4 flex justify-between items-center">
          <div className="flex-1">
            <Link href="/">
              <PVL_Logo />
            </Link>
          </div>
          <div className="text-sm gap-x-14 text-white hidden md:flex">
            <div
              onClick={() => props.pageChange("/venture-studio")}
              href="/venture-studio"
              className="cursor-pointer"
            >
              Venture Studio
            </div>
            <div
              onClick={() => props.pageChange("/portfolio")}
              href="/portfolio"
              className="cursor-pointer"
            >
              Portfolio
            </div>
            <div
              onClick={() => props.pageChange("/about")}
              href="/about"
              className="cursor-pointer"
            >
              About
            </div>
            <div
              onClick={() => props.pageChange("/opportunities")}
              href="/opportunities"
              className="cursor-pointer"
            >
              Opportunities
            </div>
            <div
              onClick={() => props.pageChange("/news")}
              className="cursor-pointer"
            >
              News
            </div>
          </div>
          <div className="gap-x-10 flex-1 justify-end hidden md:flex">
            <button
              className="yellowButton px-5 py-4 font-medium text-[#060919]"
              onClick={() => {
                window.open(
                  "https://6inc.typeform.com/idea-submission#name=xxxxx&email=xxxxx&source=pvl&linkedin_url=xxxxx",
                  "_blank"
                );
              }}
            >
              Apply Now
            </button>
          </div>
          <div className="gap-x-10 flex-1 justify-end flex md:hidden">
            <button
              className="flex flex-col h-12 w-12 border-2 border-[#FFC53E] rounded justify-center items-center group"
              onClick={() => setShowNavMenu(!showNavMenu)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  showNavMenu
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  showNavMenu
                    ? "opacity-0"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  showNavMenu
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      {showNavMenu && (
        <div
          className={`flex flex-col text-white items-center justify-center md:hidden`}
        >
          <div
            onClick={() => props.pageChange("/venture-studio")}
            href="/venture-studio"
            className="cursor-pointer px-5 py-4 w-full text-center"
          >
            Venture Studio
          </div>
          <div
            onClick={() => props.pageChange("/portfolio")}
            href="/portfolio"
            className="cursor-pointer px-5 py-4 w-full text-center"
          >
            Portfolio
          </div>
          <div
            onClick={() => props.pageChange("/about")}
            href="/about"
            className="cursor-pointer px-5 py-4 w-full text-center"
          >
            About
          </div>
          <div
            onClick={() => props.pageChange("/opportunities")}
            className="cursor-pointer px-5 py-4 w-full text-center"
          >
            Opportunities
          </div>
          <div
            onClick={() => props.pageChange("/news")}
            className="cursor-pointer px-5 py-4 w-full text-center"
          >
            News
          </div>
          <button
            className="yellowButton px-5 py-4 font-medium text-[#060919] w-full rounded-none"
            onClick={() => {
              window.open(
                "https://6inc.typeform.com/idea-submission#name=xxxxx&email=xxxxx&source=pvl&linkedin_url=xxxxx",
                "_blank"
              );
            }}
          >
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
