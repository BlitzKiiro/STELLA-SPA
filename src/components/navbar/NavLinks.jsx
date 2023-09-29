import cn from "classnames";
import Link from "next/link";

const NavLinks = ({ toggleMenu }) => {
  return (
    <ul
      className={cn(
        "md:flex-row md:items-center md:gap-x-12 ",
        "flex flex-col gap-y-8 mb-8 md:mb-0",
        "text-xl md:text-base text-white"
      )}
      onClickCapture={toggleMenu}
    >
      <Link href={"/#contact"}>
        <li className='navlink'>تواصل معنا</li>
      </Link>
      <Link href={"/#services"}>
        <li className='navlink'>خدماتنا</li>
      </Link>
      <Link href={"/#about"}>
        <li className='navlink'>من نحن</li>
      </Link>
    </ul>
  );
};

export default NavLinks;
