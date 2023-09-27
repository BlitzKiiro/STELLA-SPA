import Link from "next/link";
import { FacebookIcon, InstagramIcon, XIcon } from "../custom/icons";

const Social = () => {
  return (
    <div className='flex gap-5 items-center'>
      <Link target='_blank_instagram' href={"https://www.instagram.com/"}>
        <InstagramIcon />
      </Link>
      <Link target='_blank_fb' href={"https://www.facebook.com"}>
        {" "}
        <XIcon />
      </Link>
      <Link target='_blank_x' href={"https://www.x.com"}>
        <FacebookIcon />
      </Link>
    </div>
  );
};

export default Social;
