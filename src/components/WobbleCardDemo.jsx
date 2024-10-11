"use client";
//import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <>
    <h1 className="display-4 text-center text-body-emphasis title " id="cards">Cards</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full  px-32" >
     
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Discover your path with my intuitive angel/oracle card reading services. With my 4 year expertise in card reading, I offer a personalized approach tailored to your unique journey.
          </p>
        </div>
      
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Card readings are a helpful tool to navigate life's challenges and embrace its abundant blessings. To book an appointment with me, send me a direct message on instagram and I will get back to you as soon as possible!
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-black min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
           
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          The opportunity to connect with people and offer them guidance through card readings is something that fills me with joy. I have the chance to share my gifts and intuition with others. Through pure giftedness the cards allow me to deliver inspiring messages helping you along your path to your highest potential.
          </p>
        </div>
        <img
          src="card-img.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    </>
  );
}
