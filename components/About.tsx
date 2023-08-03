import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg } from "@/public";

const About = () => {
  return (
    <div id='about' className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-black-20 font-medium flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            temporibus dolore reiciendis rem esse! Rem incidunt nam nemo eveniet
            illum. Sint excepturi magnam ipsam quae sit adipisci enim odio. Quas
            dolorum molestias tempora animi, delectus fugiat. Est corporis
            reprehenderit perspiciatis et dolorem repellendus illo, saepe vero
            amet eveniet ut, debitis ipsa cupiditate unde. Ratione culpa quas
            esse minus non ipsam tenetur suscipit neque vero facere eos harum
            iste, adipisci, provident autem accusamus obcaecati aliquid,
            inventore veritatis aperiam ad modi rem tempore? Expedita quis
            corrupti eaque excepturi ea obcaecati. Labore corrupti quae,
            distinctio culpa nihil dolore commodi et vero dignissimos soluta.
          </p>
          <p>
            ast Forward to today, and i had the privilage of working at an
            advertising agency, a start-up
            <span className="text-textGreen">
              a huge corporation, and a student-led design studio
            </span>
          </p>
          <p>Here are a few tech:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>{" "}
              Javascript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>{" "}
              Typrescript
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hiddden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
