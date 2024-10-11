"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div>
      <a href="#about">
      <Button
        borderRadius="1.75rem"
        className="bg-white text dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
       Learn more
      </Button> </a>
    </div>
  );
}
