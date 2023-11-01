import React from "react";
import style from "./hero.module.css";
const Hero = () => {
  return (
    <div className={`${style.bg} flex flex-col items-center justify-center`}>
      <h2 className={`text-6xl text-white font-bold ${style.wraper}`}>
        <span>K</span>{" "}
        <span>R</span>{" "}
        <span>A</span>{" "}
        <span>H</span>{" "}
        <span>S</span>{" "}
        <span>E</span>{" "}
        <span>M</span>{" "}
        <span>A</span>{" "}
        <span>G</span>{" "}
      </h2>
      <p className="text-white mt-10 font-tanha text-3xl">
        آخرین و جدید ترین بازی ها را از ما بخواهید
      </p>
    </div>
  );
};

export default Hero;
