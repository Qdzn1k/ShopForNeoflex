'use client';

// import Image from "next/image";
import { useState, useEffect } from 'react';
import Card from "@/components/Card"
import { Product, products } from "@/data/products"

export default function Home() {

  const [cart, setCart] = useState<Product[]>([]);

  const wiredProducts = products.filter((p) => p.type === 'wired');
  const wirelessProducts = products.filter((p) => p.type === 'wireless');

//------------------Переписал эту часть кода непосредственно в Card------------------
  // // Функция для добавления товара в корзину
  // const handleAddToCart = (product: Product) => {
  //   console.log("prprrr")
  //   const existingCart = JSON.parse(sessionStorage.getItem('cart') || '[]');
  //   console.log(existingCart)

  //   // проверка на наличие этого товара
  //   const index = existingCart.findIndex((item: Product) => item.id === product.id);

  //   if (index !== -1) {
  //     // увеличиваем квентити
  //     existingCart[index].quantity += 1;
  //   } else {
  //     // раз нет, то добавим квентити
  //     existingCart.push({ ...product, quantity: 1 });
  //   }

  //   // Сохраняем обновленную корзину в sessionStorage и в state
  //   sessionStorage.setItem('cart', JSON.stringify(existingCart));
  //   setCart(existingCart); // Обновляем состояние корзины

  //   window.dispatchEvent(new Event("cartUpdated"));
  // }; 

  return (
    <div>
      <div>
        <h2 className="font-semibold text-xl text-[#838383] mb-[20px]">Наушники</h2>
        <div className="font-semibold text-xl text-[#838383] grid grid-cols-3 gap-[30px]">
          {wiredProducts.map((product) => (
            <Card key={product.id} product={product}/>
          ))}    

        </div>
        <h2 className="mt-[28px] font-semibold text-xl text-[#838383] mb-[20px]">Беспроводные наушники</h2>
        <div className="font-semibold text-xl text-[#838383] grid grid-cols-3 gap-[30px]">
        {wirelessProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>

  );
}
