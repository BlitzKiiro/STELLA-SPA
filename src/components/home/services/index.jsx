import AirMassage from "../../../../public/imgs/services/air.png";
import FeetMassage from "../../../../public/imgs/services/feet.jpg";
import MorocoMassage from "../../../../public/imgs/services/moroco.jpg";
import RocksMassage from "../../../../public/imgs/services/rocks.jpg";
import SwedishMassage from "../../../../public/imgs/services/swedish.jpg";
import TailandMassage from "../../../../public/imgs/services/tailand.jpg";
import BedCare from "../../../../public/imgs/services/bed care.jpg";
import Bundle1 from "../../../../public/imgs/services/bundle 1.jpg";
import Bundle2 from "../../../../public/imgs/services/bundle 2.jpg";
import Bundle3 from "../../../../public/imgs/services/bundle 3.jpg";
import vip from "../../../../public/imgs/services/vip.jpg";

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
          <Card
            img={AirMassage}
            title={"مساج كاسات الهواء"}
            description={
              "يعتبر مساج كاسات الهواء من أنواع المساج المشهورة والمعروفة وتم استخدامها بتقنيات متعددة في الكثير من الحضارات ولا يزال لهذا المساج أثره الكبير على الجسد والنفس والصحة."
            }
          />
          <Card
            img={FeetMassage}
            title={"مساج الأقدام"}
            description={
              "ما من شيء أروع من مساج القدم بعد عناء يوم طويل فأقدامنا توصلنا بالأرض وتحمل عبئاً كبيراً من وزننا لذلك من الضروري تخصيص وقت لراحة القدمين والقيام بمساج قدم من قبل مختصين محترفين.              "
            }
          />
          <Card
            img={MorocoMassage}
            title={"الحمام المغربى"}
            description={
              "يوفر لك الحمام المغربي تجربة من أروع التجارب التي تشعر الجسم بالراحة بمجرد الحصول عليه ، أفضل مركز حمام مغربي ومساج للرجال في الرياض."
            }
          />
          <Card
            img={RocksMassage}
            title={"مساج الأحجار الساخنة "}
            description={
              " يعتبر مساج الأحجار الساخنة من المساجات المهمة العالمية وكان له آثاره في تحقيق الراحة واستعادة طاقة الجسم ومن طرق الشفاء التكميلية التي لها العديد من الفوائد."
            }
          />
          <Card
            img={SwedishMassage}
            title={"المساج السويدى"}
            description={
              "يعتبر المساج السويدي من المساجات التقليدية والمنتشرة في العالم الغربي والذي يتضمن استخدام زيوت طبية متنوعة مع تقنيات متعددة في التدليك التي لها العديد من الفوائد على صحة الجسد والنفس"
            }
          />
          <Card
            img={TailandMassage}
            title={"المساج التايلندى "}
            description={
              "لا بدّ أنك سمعت عن المساج التايلندي الشهير المشهور بفوائده السريعة فهو الأفضل بين أنواع عديدة من المساجات العالمية لاختياره بعد يوم متعب أو عناء سفر أو أسبوع عمل."
            }
          />
          <Card
            img={BedCare}
            title={"بدكير منكير"}
            description={
              "نحتاج جميعنا إلى العناية بصحة اليدين والقدمين و الرجال أحوج لعناية شاملة باليدين والقدمين والأظافر بسبب جهود العمل وأعباء الحياة اليومية."
            }
          />
          <Card
            img={Bundle1}
            title={"باقة 1"}
            description={"مساج سويدي + حمام مغربي "}
          />
          <Card
            img={Bundle2}
            title={"باقة 2"}
            description='مساج تايلاني + بدكير منكير '
          />
          <Card
            img={Bundle3}
            title={"باقة 3 "}
            description='مساج مكس سويدي+ تايلاندي +احجار ساحنه + كاسات هوا'
          />
          <Card
            img={vip}
            title={"مساج VIP "}
            description='تنظيف عميق للبشره ماسك الارجان ماسك الترطيب ماسك فيتامين سي 
            _حمام مغربي بالصابون البلدي والليفه المغربيه
           _ مساج احجار ساخنه  مساج  استرخائي  بدكير منكير'
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
