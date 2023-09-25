import "./globals.css";
import { Inter } from "next/font/google";
import { Karla } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "Grid components",
  description: "Grid components Challenge",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className} bg-[#e5eff5]`}>{children}</body>
    </html>
  );
}
