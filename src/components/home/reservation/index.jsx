import Link from "next/link";
import { WavesIcon, WhatsAppIcon } from "../../custom/icons";

const Reservation = () => {
  return (
    <div className="bg-[url('/imgs/preview/pc.jpg')] bg-fixed bg-no-repeat bg-cover h-[60vh] flex flex-col justify-center items-center gap-10 p-6 text-center">
      <span data-aos='zoom-in-up' data-aos-duration='500'>
        <WavesIcon />
      </span>
      <h1 data-aos='zoom-in-up' data-aos-duration='700' className='text-4xl'>
        استرخ كل يوم
      </h1>
      <p className='text-xl' data-aos='zoom-in-up' data-aos-duration='900'>
        قم بالإستفسار أو بحجز موعد عن طريق الواتساب الأن
      </p>
      <Link
        href={
          "https://api.whatsapp.com/send/?phone=9660564527479&text&type=phone_number&app_absent=0&text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AD%D8%AC%D8%B2%20%D8%A5%D8%AD%D8%AF%D9%8A%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
        }
        target='wa_blank'
        data-aos='zoom-in-up'
        data-aos-duration='1200'
        className=' h-11 px-[60px] bg-white rounded-[3px] border border-white justify-center items-center gap-2 inline-flex'
      >
        <div className="text-black text-[15px] font-bold font-['Playfair Display'] uppercase tracking-tight flex gap-2 items-center">
          <WhatsAppIcon />
          <p> احجز الأن</p>
        </div>
      </Link>
    </div>
  );
};

export default Reservation;
