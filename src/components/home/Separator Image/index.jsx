import Image from "next/image";

const SeparatorImage = ({ img }) => {
  return (
    <div className='w-full p-[20px] flex justify-center'>
      <Image
        data-aos-duration='1200'
        data-aos='flip-left'
        alt='Stella SPA'
        src={img}
        width={400}
      />
    </div>
  );
};

export default SeparatorImage;
