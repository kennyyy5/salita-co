import { CardStackDemo } from "./CardStackDemo";
import Testimonials from "./Testimonials"
import Title from "./Title";
import React from 'react'

function Card() {
  return (
    <>
<div className="container col-xxl-8 px-4 open" id="cards">
  <div className="row flex-lg-row-reverse align-items-center g-5">

      <div className="col-10 col-sm-8 col-lg-6 card-img">
      <Title title = "TESTIMONIALS"/>
      
      <Testimonials/>
    </div>
    <div className="col-lg-6">
    <Title title = "CARDS" />
    <CardStackDemo/>
      </div>
    </div>
  </div>

 </>
  )
}

export default Card

