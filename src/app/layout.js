import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  title: "Serenico Spaces",
  description: "Luxury Interior Design Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${heading.className} ${body.className}`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
