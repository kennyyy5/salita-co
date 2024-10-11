import React from 'react'
import { cn } from "../../lib/utils";
import { Spotlight } from "../components/ui/Spotlight";
import FlipWordsDemo from './FlipWords'
import { MovingBorderDemo } from './MovingBordersDemo';
import { FlipWords } from "../components/ui/flip-word";


function Landing() {
  const words = ["SPIRITUAL", "ENTHUSIAST", "SEER", "MENTAL" ,   "HEALTH",     "ADVOCATE"

  ];
  return (
    <div className="px-4 py-5 my-5 text-center">

 
  <div className="col-lg-6 mx-auto">
    
    <span className="title display-5 fw-bold text-body-emphasis">SALITA.CO</span>  <br/>
    <span className="title lead mb-4">CREATED BY AVA SCHIPANI</span>  <br/>
    <FlipWords words={words} /> <br />
    <MovingBorderDemo/>
    <img
    className="d-block mx-auto mb-4"
    src="/landing-img.png"
    alt=""
    width={700}
    height={500}
  />
  </div>
</div>



   
  )
}

export default Landing