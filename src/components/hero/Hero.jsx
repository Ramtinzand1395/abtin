import React from "react";
import style from "./hero.module.css";
import Boxes from "./Boxes";
const Hero = () => {
  return (
    <div className={`${style.bg} flex flex-col items-center justify-center`}>
      <h2 className={`text-6xl text-white font-bold ${style.wraper}`}>
        <span className="mr-5">G</span>
        <span className={` ${style.shadow}`}>G</span>
        <span className="">A</span>
        <span className={` ${style.shadow}`}>A</span>
        <span className="mr-2">M</span>
        <span className={` ${style.shadow}`}>M</span>
        <span className="mr-1">E</span>
        <span className={` ${style.shadow}`}>E</span>

        
        <span className="mx-5">S</span>
        <span className={` ${style.shadow}`}>S</span>
        <span className="mr-8">A</span>
        <span className={` ${style.shadow}`}>A</span>
        <span className="">R</span>
        <span className={` ${style.shadow}`}>R</span>
        <span className="mr-1">K</span>
        <span className={` ${style.shadow}`}>K</span>
      </h2>
      <p className={`text-white mt-10 font-tanha text-5xl ${style.text}`}>
        آخرین و جدید ترین بازی ها را از ما بخواهید
      </p>
      <Boxes />
    </div>
  );
};

export default Hero;
