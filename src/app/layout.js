import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import MoveToTop from "@/components/MoveToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500",],
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
