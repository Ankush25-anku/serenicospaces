import {
  Playfair_Display,
  Manrope,
  Roboto,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import MoveToTop from "@/components/MoveToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});
const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
export const metadata = {
  title: "Serenico Spaces",
  description: "Luxury Interior Design Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${heading.className} ${body.className}`}
        style={{
          "--font-heading": heading.style.fontFamily,
          "--font-body": body.style.fontFamily,
          "--font-roboto": roboto.style.fontFamily,
          "--font-montserrat": montserrat.style.fontFamily,
        }}
      >
        <Header />
        {children}
        <WhatsAppButton />
        <MoveToTop />

        <Footer />
      </body>
    </html>
  );
}
