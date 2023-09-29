"use client";
import Image from "next/image";
import { useRef } from "react";

import { useHover, useIntersectionObserver, useMediaQuery } from "usehooks-ts";
import cn from "classnames";
import Link from "next/link";

const Card = ({ img, title, description }) => {
  const isMobileScreen = window.innerWidth <= 767;

  console.log(isMobileScreen);

  const ref = useRef(null);
  const isHover = useHover(ref);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      data-aos='fade-left'
      data-aos-duration='1200'
      ref={ref}
      className='drop-shadow w-[350px] h-[300px] overflow-hidden relative mx-auto '
    >
      <Image
        src={img}
        alt={title}
        fill
        className={cn("transition-all duration-500 scale-[1]", {
          "!scale-[1.1]": isMobileScreen ? isVisible : isHover,
        })}
      />
      <span
        className={cn(
          "transition-all duration-500 ",
          "absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)]  opacity-0 ",
          { " opacity-100 ": isMobileScreen ? isVisible : isHover }
        )}
      >
        <p className='text-xl cursor-default'>{title}</p>
        <Link
          href={`https://api.whatsapp.com/send/?phone=9660564527479&text&type=phone_number&app_absent=0&text=السلام عليكم، أرغب في حجز ${title}`}
          target='_blank_res'
          className='absolute bottom-20 border border-white rounded-md py-1 px-6'
        >
          احجز الأن
        </Link>
      </span>
    </div>
  );
};

export default Card;
