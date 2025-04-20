

import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import CartIcon from "@/components/Cart";
import CartWrapper from "@/components/CartWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QPICK",
  description: "Best shop on localhost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}  antialiased bg-[#EAEAEA] min-h-screen`
        }
      >
        <div className="max-w-[1440px] mx-auto font-[family-name:var(--font-montserrat)] min-h-screen flex flex-col">
          {/* Хедер - выносим за пределы ограниченного контейнера */}
          <div className="w-full">
            <div className="max-w-[1110px] mx-auto h-[60px] flex items-center justify-between mb-[28px]">
              <Link href='/'>
                <h1 className="font-bold text-[25px] leading-[100%] tracking-[0%]">QPICK</h1>
              </Link>
              <div className="flex">
                <CartIcon count={0} alt="Избранное" iconSrc="/favorite.svg" />
                <CartWrapper />
              </div>
            </div>
          </div>

          <main className="max-w-[1110px] mx-auto flex-grow w-full">
            {children}
          </main>

          <footer className="w-full mt-[20px]">
            <div className="max-w-[1110px] bg-white rounded-tl-[30px] rounded-tr-[30px] mx-auto px-[29px] pt-[28px] grid grid-cols-4">
              <Link href='/'>
                <h1 className="font-bold text-[25px] leading-[100%] tracking-[0%]">QPICK</h1>
              </Link>
              <p>ikffiodjgifdj dfijgiopfd df jgfdikop jgoidfjg oifdj oigdjf iogjdfoi jgiodf jgoifdj goidjf iojgiodf</p>
            </div>
          </footer>
        </div>

      </body>
    </html>
  );
}
