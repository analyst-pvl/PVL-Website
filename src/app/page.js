"use client";
import Footer from "@/Components/Footer/Footer";
import Blogs from "@/Components/Homepage/Blogs";
import BrightStudents from "@/Components/Homepage/BrightStudents";
import CompaniesValues from "@/Components/Homepage/CompaniesValues";
import Excuse from "@/Components/Homepage/Excuse";
import Funding from "@/Components/Homepage/Funding";
import Hero from "@/Components/Homepage/Hero";
import Highlight from "@/Components/Homepage/Highlight";
import Ideas from "@/Components/Homepage/Ideas";
import Programs from "@/Components/Homepage/Programs";
import Who from "@/Components/Homepage/Who";
import NavBar from "@/Components/NavBar/NavBar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [fadeOut, setFadeOut] = useState(0);

  const router = useRouter();

  const handlePageChange = (url) => {
    setFadeOut(1);
    setTimeout(() => router.push(url), 300);
  };

  return (
    <>
      <NavBar shouldCover pageChange={handlePageChange} />
      <div
        className={`${
          fadeOut ? "transition-all duration-500 opacity-0" : "animate-fade-in"
        }`}
      >
        <Hero />
        <CompaniesValues />
        <Blogs pageChange={handlePageChange} />
        <Ideas />
        <Funding pageChange={handlePageChange} />
        <Highlight />
        <Who />
        <Programs />
        <Excuse />
        <BrightStudents />
        <Footer />
      </div>
    </>
  );
};

export default Page;
