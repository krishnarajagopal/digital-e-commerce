'use client'
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Footer } from "./_components/Footer";
import { ClerkProvider } from '@clerk/nextjs'
import { useReducer, useState } from "react";
import { CartContext } from "./_context/CartContext";
import GlobalApi from "./_utils/GlobalApi";
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

const[cart,setCart]=useState([])

  return (
    <ClerkProvider>
      <CartContext.Provider value={{cart,setCart}} >
    <html lang="en">
    <body className={poppins.className}>

        <Header />
        {children}
        <Footer />
        <Toaster richColors closeButton invert visibleToasts={2} position="bottom-right"/>
        </body>
    </html>
    </CartContext.Provider>
  </ClerkProvider>
  );
}
