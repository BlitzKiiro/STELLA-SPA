"use client";
import Image from "next/image";
import { useRef } from "react";

import { useHover } from "usehooks-ts";
import cn from "classnames";

const Card = ({ img, title, description }) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <div
      data-aos='fade-left'
      data-aos-duration='1200'
      ref={hoverRef}
      className='drop-shadow w-[350px] h-[300px] overflow-hidden relative mx-auto '
    >
      <Image
        src={img}
        alt={title}
        fill
        className={cn("transition-all duration-500 scale-[1]", {
          "scale-[1.11]": isHover,
        })}
      />
      <span
        className={cn(
          "transition-all duration-500 ",
          "absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)]  opacity-0 ",
          { " opacity-100 ": isHover }
        )}
      >
        <p className='text-xl cursor-default'>{title}</p>
        <button className='absolute bottom-20 border border-white rounded-md py-1 px-6'>
          احجز الأن
        </button>
      </span>
    </div>
  );
};

export default Card;
