import "./globals.css";
import "aos/dist/aos.css";
import { Cairo } from "next/font/google";
import AOS from "@/components/aos";
import Footer from "@/components/footer";

export const metadata = {
  title: "Stella SPA - خدمات مساج متكاملة",
  description:
    "Stella SPA massage & care center, Saudi Arabia, ستيلا سبا لخدمات المساج في المملكة العربية السعودية",
  other: {
    "theme-color": "#958977",
  },
};

const cairo = Cairo({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "swap",
  subsets: ["arabic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={cairo.className}>
        {children}
        <Footer />
      </body>
      <AOS />
    </html>
  );
}
