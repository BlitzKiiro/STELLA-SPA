import cn from "classnames";
import Image from "next/image";
import Logo from "../../../../public/imgs/logo/logo white.png";

const HomeHeader = ({ children }) => {
  return (
    <div className="bg-[url('/imgs/bg/header.webp')] bg-no-repeat bg-cover">
      {children}
      <div
        className={cn(
          "flex flex-col items-center justify-center md:justify-start py-[80px] md:py-[160px] px-5 gap-[35px]",
          "w-full h-full ",
          "text-white text-center"
        )}
      >
        <h1
          className='text-5xl md:text-7xl '
          data-aos='zoom-in-up'
          data-aos-duration='500'
        >
          ستيلا سبا للمساج
        </h1>
        <Image
          src={Logo}
          alt='ستيلا سبا للمساج'
          width={500}
          data-aos='zoom-in-up'
          data-aos-duration='700'
        />
        <p
          className='text-[18px] drop-shadow-lg p-2'
          data-aos='zoom-in-up'
          data-aos-duration='1000'
        >
          ستيلا سبا للمساج نحرص على توفير أمهر المتخصصين المحترفين لتلبية
          احتياجات العملاء
        </p>
        <button
          data-aos='zoom-in-up'
          data-aos-duration='1200'
          className='w-[207px] h-11 px-[60px] bg-white rounded-[3px] border border-white justify-center items-center gap-2 inline-flex'
        >
          <div className="text-neutral-700 text-[15px] font-bold font-['Playfair Display'] uppercase tracking-tight">
            احجز الأن
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;
