import AirMassage from "../../../../public/imgs/services/air.png";
import FeetMassage from "../../../../public/imgs/services/feet.jpg";
import MorocoMassage from "../../../../public/imgs/services/moroco.jpg";
import RocksMassage from "../../../../public/imgs/services/rocks.jpg";
import SwedishMassage from "../../../../public/imgs/services/swedish.jpg";
import TailandMassage from "../../../../public/imgs/services/tailand.jpg";

import Card from "@/components/custom/Card";
import { WiresIcon } from "@/components/custom/icons";

const Services = () => {
  return (
    <div
      dir='rtl'
      className='relative w-[90%] mx-auto my-32 flex flex-col md:flex-row items-center '
      data-aos='fade-up'
      data-aos-duration='1200'
      id='services'
    >
      <p className='md:rotate-90 text-center mb-[30px]'>خدماتنا </p>
      <div className='mx-auto text-center '>
        <div className='w-full flex justify-center mb-10'>
          <WiresIcon />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3  gap-10  mx-auto justify-center items-center'>
          <Card img={AirMassage} title={"مساج كاسات الهواء"} />
          <Card img={FeetMassage} title={"مساج الأقدام"} />
          <Card img={MorocoMassage} title={"الحمام المغربى"} />
          <Card img={RocksMassage} title={"مساج الأحجار الساخنة "} />
          <Card img={SwedishMassage} title={"المساج السويدى"} />
          <Card img={TailandMassage} title={"المساج التايلندى "} />
        </div>
      </div>
    </div>
  );
};

export default Services;
