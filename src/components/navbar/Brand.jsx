import Link from "next/link";
import cn from "classnames";
import { FlowerIcon } from "../custom/icons";

const Brand = () => {
  return (
    <Link href={"/"}>
      <span
        className={cn(
          "cursor-pointer font-semibold text-2xl  text-white flex gap-1 items-center"
        )}
      >
        <FlowerIcon />
        <p>
          Stella <br /> SPA
        </p>
      </span>
    </Link>
  );
};

export default Brand;
