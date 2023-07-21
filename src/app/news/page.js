"use client";
import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/NavBar/NavBar";
import NewsCard from "@/Components/News/NewsCard";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const News = () => {
  const [fadeOut, setFadeOut] = useState(0);

  const router = useRouter();

  const handlePageChange = (url) => {
    setFadeOut(1);
    setTimeout(() => {
      url == "/opportunities" ? setFadeOut(0) : router.push(url);
    }, 500);
  };

  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40digital_72236",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setData(JSON.parse(result).items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <NavBar pageChange={handlePageChange} />
      <div
        className={`flex items-center justify-center my-5  ${
          fadeOut
            ? "transition-all duration-500 opacity-0"
            : "animate-fade-in-up"
        }`}
      >
        <div className="container flex items-center justify-center flex-col">
          <h1 className="text-5xl text-[#333] font-medium mb-5">Latest News</h1>
          {data ? (
            <div className="grid grid-cols-4 w-full my-5 gap-10">
              {data.map((item, index) => (
                <NewsCard data={item} key={index} />
              ))}
            </div>
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
