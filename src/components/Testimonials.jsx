"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <>
    <h1 className="display-4 text-center text-body-emphasis title pt-5" id="testimonials">Testimonials</h1>
    <div  className="h-[15rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "You were spot on with everything you said!!! You are killing it",
    name: "",
    title: "",
  },
  {
    quote:
      "Your card reading was not only accurate but also delivered with such compassion.",
    name: "",
    title: "",
  },
  {
    quote:
      "Amazing. Super accurate and insightful",
    name: "",
    title: "",
  },
  {
    quote:
      "Such good energy, everything in my reading resonated with me",
    name: "",
    title: "",
  },{
    quote:
      "You're a truly gifted card reader. This was amazing",
    name: "",
    title: "",
  },{
    quote:
      "Incredible guidance and very welcoming space",
    name: "",
    title: "",
  },{
    quote:
      "Unbelievable! Your card reading resonated with me on such a deep level. Your intuitive abilities are a gift.",
    name: "",
    title: "",
  },{
    quote:
      "Your card reading provided me with so much clarity. I can't thank you enough.",
    name: "",
    title: "",
  }
];
