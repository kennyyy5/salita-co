import React from 'react'

function About() {
  return (
    <div className="container my-5" id='about'>
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 className="display-4  lh-1 text-body-emphasis title">
        ABOUT
      </h1>
      <p className="lead text">
      Hello, my name is Ava! I created SALITA with the intention of sharing my knowledge on all things health and wellness. Currently pursuing my degree in psychology, I'm continually broadening my horizons in the field of mental health. Over the past 4 years, I have been practicing psychological and spiritual healing. I have gained a great understanding of the factors that contribute to maintaining overall wellness, maintaining good energy and attracting the life you desire.
<br/><br/>

Ultimately, my goal is to inspire and educate my readers. I hope that my brand serves as a valuable resource for individuals looking to improve their overall wellness, and that they walk away with insightful knowledge that positively impacts their lives.
      </p>
     
    </div>
    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg" >
      <img
        className="rounded-lg-3"
        src="ava-img.png"
        alt="ava-img-salita-co"
        width={720}
        
      />
    </div>
  </div>
</div>

  )
}

export default About
