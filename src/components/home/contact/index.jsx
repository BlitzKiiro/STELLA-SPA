import { LocationIcon, MailIcon, PhoneIcon } from "@/components/custom/icons";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      className='my-10 md:my-48 px-6 md:px-48 flex justify-center'
      dir='rtl'
      id='contact'
    >
      <div className='grid grid-cols-2 gap-y-10 w-[80%]'>
        <div className='col-span-2 md:col-span-1 '>
          <h2
            className='text-3xl mb-10'
            data-aos='fade-down'
            data-aos-duration='500'
          >
            تواصل معنا
          </h2>
          <div className='flex flex-col gap-4'>
            <span
              className='flex gap-2'
              data-aos='fade-down'
              data-aos-duration='700'
            >
              <LocationIcon /> <p>الرياض , المملكة العربية السعودية​</p>
            </span>
            <span
              className='flex gap-2 relative'
              data-aos='fade-down'
              data-aos-duration='900'
            >
              <PhoneIcon /> <p> 0564527479 </p>
            </span>
            <Link
              className='flex gap-2'
              href='mailto:spastella8@gmail.com'
              data-aos='fade-down'
              data-aos-duration='1100'
            >
              <MailIcon /> <p> spastella8@gmail.com</p>
            </Link>
          </div>
        </div>
        <div
          className='col-span-2 md:col-span-1'
          data-aos='fade-down'
          data-aos-duration='500'
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463928.4575429797!2d46.637078716476644!3d24.71173331485359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1695997650176!5m2!1sen!2seg'
            height='450'
            className='border-0 w-full'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
