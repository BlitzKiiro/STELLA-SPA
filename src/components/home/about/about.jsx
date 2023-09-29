import { BranchIcon } from "@/components/custom/icons";

const About = () => {
  return (
    <div
      dir='rtl'
      className='relative w-[90%] mx-auto my-32 flex flex-col md:flex-row items-center md:items-end'
      data-aos='fade-up'
      data-aos-duration='1200'
    >
      <p className='md:rotate-90 text-center mb-[30px]'>من نحن</p>
      <div className='mx-auto w-[70%] text-center '>
        <div className='w-full flex justify-center mb-10'>
          <BranchIcon />
        </div>
        <div>
          <span className='text-white text-[20px] md:text-[30px] font-medium  leading-[48px] '>
            في مركز ستيلا سبا{" "}
          </span>
          <span className='text-white text-[20px]  md:text-[30px] font-light  leading-[48px]'>
            نقوم بتقديم أفضل خدمات التدليك والمساج بأيدي أمهر المختصين الذين
            يعملون بحرفية تلبي كافة احتياجاتك للوصول للراحة المنشودة بأفضل
            التقنيات والطرق الحديثة والمبتكرة والعلاجية المستخدمة
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
