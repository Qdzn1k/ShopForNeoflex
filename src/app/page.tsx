'use client'; 

// import Image from "next/image";
import Card from "@/components/Card"
import {products} from "@/data/products"

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] min-h-screen">
    <div>
      <div>
        <h2 className="font-semibold text-xl text-[#838383] mb-[20px]">Наушники</h2>
        <div className="font-semibold text-xl text-[#838383] grid grid-cols-3 gap-[30px]">
          {/* <Card imgSrc="/Apple BYZ S8521.png"
                productName="Apple BYZ S852I"
                price={2927}
                lastPrice={3527}
                rating={4.7}
                alt="Наушнеке"
                onBuy={(name) => {
                  console.log("Добавлено в корзину:", name)}}/> */}
                  {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
          <h1>Наушники</h1>
          <h1>Наушники</h1>
          <h1>Наушники</h1>
          
        </div>
      </div>
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer> */}
    </div>

  );
}
