import "./globals.css";
import "aos/dist/aos.css";
import { Noto_Kufi_Arabic } from "next/font/google";
import AOS from "@/components/aos";

export const metadata = {
  title: "Stella SPA - خدمات مساج متكاملة",
  description:
    "Stella SPA massage & care center, Saudi Arabia, ستيلا سبا لخدمات المساج في المملكة العربية السعودية",
  other: {
    "theme-color": "#958977",
  },
};

const Kufi = Noto_Kufi_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["arabic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={Kufi.className}>{children}</body>
      <AOS />
    </html>
  );
}
