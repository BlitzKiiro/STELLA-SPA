import Link from "next/link";
import { TiktokIcon, SnapChatIcon } from "../custom/icons";

const Social = () => {
  return (
    <div className='flex gap-5 items-center'>
      <Link
        target='_blank_instagram'
        href={"https://www.tiktok.com/@stella_spaa23"}
      >
        <TiktokIcon />
      </Link>
      <Link
        target='_blank_fb'
        href={"https://www.snapchat.com/add/stellaspa23"}
      >
        <SnapChatIcon />
      </Link>
    </div>
  );
};

export default Social;
