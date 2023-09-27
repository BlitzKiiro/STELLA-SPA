import Link from "next/link";
import cn from "classnames";

const Brand = () => {
  return (
    <Link href={"/"}>
      <span
        className={cn(
          "cursor-pointer font-semibold text-2xl leading-none text-white"
        )}
      >
        Stella <br /> SPA
      </span>
    </Link>
  );
};

export default Brand;
