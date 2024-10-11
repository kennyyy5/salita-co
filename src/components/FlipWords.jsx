import React from "react";
import { FlipWords } from "../components/ui/flip-word";
import { MovingBorderDemo } from "./MovingBordersDemo";

export default function FlipWordsDemo() {
  const words = ["SPIRITUAL", "ENTHUSIAST", "SEER", "MENTAL" ,   "HEALTH",     "ADVOCATE"

  ];

  return (
    <div className="h-[13rem] flex justify-center items-center px-4 landing">
      <div className="text-4xl text-center mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      <span className="titlE">SALITA.CO</span>  <br/>
     <span className="title">CREATED BY AVA SCHIPANI</span>  <br/>
        <FlipWords words={words} /> <br />
        <MovingBorderDemo/>
      </div>
    </div>
  );
}
