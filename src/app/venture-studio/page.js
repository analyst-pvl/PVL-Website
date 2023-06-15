"use client";
import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/NavBar/NavBar";
import Hero from "@/Components/VentureStudio/Hero";
import Process from "@/Components/VentureStudio/Process";
import Provide from "@/Components/VentureStudio/Provide";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [fadeOut, setFadeOut] = useState(0);

  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePageChange = (url) => {
    setFadeOut(1);
    setTimeout(() => {
      url == "/venture-studio" ? setFadeOut(0) : router.push(url);
    }, 500);
  };

  return (
    <>
      <NavBar shouldCover pageChange={handlePageChange} />
      <div
        className={`${
          fadeOut
            ? "transition-all duration-500 opacity-0"
            : "animate-fade-in-up"
        }`}
      >
        <Hero />
        <Provide />
        <Process />
        <Footer />
      </div>
    </>
  );
};

export default Page;
