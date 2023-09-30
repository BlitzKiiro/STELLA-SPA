"use client";
import Image from "next/image";
import { useRef } from "react";

import { useHover } from "usehooks-ts";
import cn from "classnames";
import Link from "next/link";

const Card = ({ img, title, description }) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <div
      data-aos='fade-left'
      data-aos-duration='1200'
      ref={hoverRef}
      className='w-[95%] md:w-[370px] h-[570px] overflow-hidden relative mx-auto bg-white '
    >
      <div className='relative w-full h-[230px] overflow-hidden'>
        <Image
          src={img}
          alt={title}
          className={cn("transition-all duration-500 scale-[1] w-full", {
            "!scale-[1.1]": isHover,
          })}
        />
      </div>
      <div className='w-full flex flex-col items-center justify-center  px-4 py-12 gap-6  '>
        <h2 className='text-2xl cursor-default font-bold text-zinc-950'>
          {title}
        </h2>
        <p className='text-gray-800 leading-8'> {description}</p>
        <Link
          href={`https://api.whatsapp.com/send/?phone=9660564527479&text&type=phone_number&app_absent=0&text=السلام عليكم، أرغب في حجز ${title}`}
          target='_blank_res'
          className='absolute bottom-10 border bg-[#6C6456] rounded-md py-1 px-6'
        >
          احجز الأن
        </Link>
      </div>
    </div>
  );
};

export default Card;
