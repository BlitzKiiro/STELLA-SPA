"use client";
import cn from "classnames";
import { useState } from "react";
import Brand from "./Brand";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";
import Overlay from "./Overlay";
import Social from "./Social";

const Navbar = () => {
  const [menuIsVisible, setmenuIsVisible] = useState(false);

  const toggleMenu = () => {
    setmenuIsVisible(!menuIsVisible);
  };

  return (
    <nav id='navbar' className={cn("flex justify-center  pt-12")}>
      <div
        className={cn(
          "flex flex-wrap md:flex-nowrap justify-between gap-x-16 p-0",
          "w-10/12 md:w-full md:mx-[52px]"
        )}
      >
        <Brand />
        <MenuButton menuIsVisible={menuIsVisible} toggleMenu={toggleMenu} />
        <div className={cn("basis-full", "md:hidden")}></div>
        <Overlay menuIsVisible={menuIsVisible} />
        <div
          className={cn(
            { "!top-0": menuIsVisible },
            "transition-all duration-700 ",
            "fixed left-0 -top-[100%] w-full h-full overflow-hidden z-10",
            "flex flex-col justify-center items-center text-center w-full  gap-y-6",
            "md:flex-row md:justify-between md:items-start md:w-[58%]",
            "md:relative md:top-0 md:left-0  "
          )}
        >
          <NavLinks toggleMenu={toggleMenu} />
          <Social />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
