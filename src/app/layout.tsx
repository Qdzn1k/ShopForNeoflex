

import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

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
            <div className="max-w-[1110px] bg-white rounded-tl-[30px] rounded-tr-[30px] mx-auto px-[29px] pt-[28px] pb-[32px] grid grid-cols-4">
              <Link href='/'>
                <h1 className="font-bold text-[25px] leading-[100%] tracking-[0%]">QPICK</h1>
              </Link>
              <div className="flex flex-col font-normal space-y-[10px]">
                <Link href="/" className="cursor-pointer pointer-events-none">Избранное</Link>
                <Link href="/cartPage">Корзина</Link>
                <Link href="/" className="pointer-events-none">Контакты</Link>
              </div>
              <div className="flex flex-col font-normal space-y-[35px]">
                <Link href="/" className="pointer-events-none">Условия сервиса</Link>
                <div className="flex font-medium gap-[17px]">
                  <Image
                    src='/RU.svg'
                    width={20}
                    height={20}
                    alt='world'
                  />
                  <button className="cursor-pointer text-[#FFA542] font-bold">
                    Рус
                  </button>
                  <p className="cursor-pointer">Eng</p>
                  <p className="cursor-pointer">Kaz</p>
                </div>
              </div>
              <div className="flex items-start justify-end">
                <div className="flex gap-[10px] items-center">
                  <Link target="_blank" rel="noopener noreferrer" href="https://avatars.mds.yandex.net/i?id=b683c7dee3fc4a5a6a686ce996246378d34da697-8178604-images-thumbs&n=13">
                    <Image
                      src='/VK.svg'
                      width={30}
                      height={30}
                      alt='world'
                    /></Link>
                    <Link target="_blank" rel="noopener noreferrer" href="https://avatars.mds.yandex.net/i?id=5a39214e4bff8dd01402e435e43fc7ea3ecc5238-10106325-images-thumbs&n=13">
                    <Image
                      src='/Telegram.svg'
                      width={30}
                      height={30}
                      alt='world'
                    /></Link>
                    <Link target="_blank" rel="noopener noreferrer" href="https://avatars.mds.yandex.net/i?id=ae5e9a0e340215ea710cd7f81ccde625038c602e-5449367-images-thumbs&n=13">
                    <Image
                      src='/Whatsapp.svg'
                      width={30}
                      height={30}
                      alt='world'
                    /></Link>
                </div>
              </div>
            </div>
          </footer>
        </div>

      </body>
    </html>
  );
}
