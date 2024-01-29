import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Footer } from "./_components/Footer";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
    <body className={poppins.className}>

        <Header />
        {children}
        <Footer />
        </body>
    </html>
  </ClerkProvider>
  );
}
