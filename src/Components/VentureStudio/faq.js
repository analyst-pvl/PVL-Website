import { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import faqdata from "../../../data/venturestudio";
const FAQ = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="container pt-24 flex flex-col justify-between items-center md:items-stretch">
        <div className="flex flex-col justify-between">
          <div className="flex md:block items-center justify-center flex-col">
            <div className="w-24 h-2 bg-[#0B0B0B]" />
            <h2 className="font-extrabold text-5xl lg:text-6xl mt-5">FAQ</h2>
          </div>
        </div>
        <div className="mt-10 md:mt-5 w-full  last:border-white mb-24 flex flex-col gap-3">
          {faqdata.map((item, index) => {
            return (
              <Section
                key={index}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
          <div className="mt-4 p-4  bg-[#ededed] rounded border ">
            <p className="font-semibold">Contact us for more details</p>
            <p>
              Pradyun{" "}
              <a
                className="text-blue-400 hover:underline"
                href="tel:+919663928924"
              >
                +919663928924
              </a>
            </p>
            <p>
              Deepika{" "}
              <a
                className="text-blue-400 hover:underline"
                href="tel:+918553030046"
              >
                +918553030046
              </a>
            </p>
          </div>
          {/* <ProcessDiv
            step="01"
            heading="Bootcamp to discover deep tech product"
            parah="Come with your own project idea, or participate in our bootcamp identified interesting industry-wide problems, backed by corporates"
            border
          />
          <ProcessDiv
            step="02"
            heading="Turn the idea in to a product"
            parah="Access to tools, hosting, APIs, data sets, mentors, designers & anything else you may require to take your idea to the next level"
            border
          />
          <ProcessDiv
            step="03"
            heading="Get your career a 10x jump"
            parah="Sell your project, convert in to startup or just cash-in the prize money and move on with your life"
          /> */}
          {/* <ProcessDiv
        step="04"
        heading="Exit & Iterate"
        parah="Generate value in 1 of 3 ways with your project: Get Acquired and Paid by Us; Create your Startup; Go for External Funding"
      />  */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const Section = ({ question, answer }) => {
  const [open, setopen] = useState(false);
  return (
    <div className="border rounded bg-[#ededed] w-full p-4 flex flex-col gap-2 ">
      <div
        onClick={() => setopen(!open)}
        className="flex flex-row gap-4 justify-between"
      >
        <p className="font-semibold ">{question}</p>
        <span onClick={() => setopen(!open)}>
          {!open ? (
            <ArrowDownwardIcon className="hover:drop-shadow cursor-pointer" />
          ) : (
            <ArrowUpwardIcon className="hover:drop-shadow cursor-pointer" />
          )}
        </span>
      </div>
      <div
        className={` ${
          open ? " h-full" : "h-0 hidden transform ease-in-out delay-100"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};
