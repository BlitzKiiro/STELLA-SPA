"use client";
import aos from "aos";
import Script from "next/script";

const AOS = () => {
  if (typeof window !== "undefined") aos.init({ once: true });
  return (
    <>
      <Script id='AOS' src='aos/dist/aos.js'>
        {` AOS.init();`}
      </Script>
    </>
  );
};

export default AOS;
