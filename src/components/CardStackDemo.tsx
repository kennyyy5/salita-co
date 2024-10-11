"use client";
import { CardStack } from "../components/ui/card-stack";
import { cn } from "../../lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[22rem] flex items-center justify-center w-full ">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "",
    designation: "",
    content: (
      <p className="text  ">
        Discover your path with my intuitive angel/oracle card reading services. With my 4 year expertise in card reading, I offer a personalized approach tailored to your unique journey. 
      </p>
    ),
  },
  {
    id: 1,
    name: "",
    designation: "",
    content: (
      <p className="text">
        Card readings are a helpful tool to navigate life's challenges and
        embrace its abundant blessings. To book an appointment with me, send me a direct message on <a href="https://www.instagram.com/salita.co" target="_blank" className="link">instagram</a> and I will get back to you as soon as possible!
      </p>
    ),
  },
  {
    id: 2,
    name: "",
    designation: "",
    content: (
      <p className="text">
        The opportunity to connect with people and offer them guidance through 
        card readings is something that fills me with joy. I have the chance to share 
        my gifts and intuition with others. Through pure giftedness the cards allow 
        me to deliver inspiring messages 
        helping you along your path to your highest potential.
      </p>
    ),
  },
];
