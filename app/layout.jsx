import {Open_Sans,  } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


const open_Sans  = Open_Sans({
  weight:["300","400","500","600","700","800"],
  subsets: ["latin"] });

export const metadata = {
  title: "crystal-mobile-app",
  description: "Tasks report",

};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">



      <body className={`h-screen ${open_Sans.className}`}>
       
         <header >
        <Header/>
        </header>
        {children}
        </body>
      
    </html>
  );
}
