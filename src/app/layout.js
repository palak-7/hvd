import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar/Navbar";
import Whatsapp from "@/components/common/whatsapp/Whatsapp";
import Location from "@/components/common/location/Location";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Health Vista Diagnostics",
  description: "where health meets precision",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Location />
        <Whatsapp />
      </body>
    </html>
  );
}
