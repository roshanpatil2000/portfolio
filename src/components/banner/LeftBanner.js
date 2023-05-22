import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';


const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["A Professional Programmer.", "A React.JS Developer.", "A Python Programmer.","A Java Developer.", "A Data Analyst."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Roshan Patil</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
            <span> {text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
         As a web developer is to leverage my technical skills and creativity to design and
            develop innovative and user-friendly web solutions.
            I aim to contribute to the success of organizations by building efficient
            and visually appealing websites that meet clients'
            needs and enhance their online presence
        </p>
      </div>
     <Media />
    </div>
  );
}

export default LeftBanner