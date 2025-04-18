// // components/CartIcon.tsx
// 'use client'; 

// import Image from "next/image"; // или любая другая иконка
// import React from "react";

// type CardProps = {
//     imgSrc: string;
//     productName: string
//     price: number;
//     lastPrice: number;
//     rating: number;
//     alt: string;
//     onBuy: (productName: string) => void;
// };

// const CartIcon: React.FC<CardProps> = ({ imgSrc, productName, price, lastPrice, rating, alt, onBuy }) => {
//     return (
//         <div className="flex flex-col items-center rounded-[30px] bg-white items-center justify-center px-[20px] pt-[12px] pb-[32px]">
//             <Image
//                 src={imgSrc} // или .png / .jpg — в зависимости от формата
//                 alt={alt}
//                 width={237}
//                 height={237}
//             />
//             <div className="flex justify-between w-full font-semibold">
//                 <h3 className="text-[#1C1C27]">{productName}</h3>
//                 <p className="text-[#FFA542]">{price}<span>₽</span></p>
//             </div>
//             <p className="text-sm line-through self-end me-3 text-[#FFCE7F]">{lastPrice}</p>
//             <div className="flex justify-between w-full font-semibold">
//                 <div className="flex items-center">
//                     <Image
//                         src="/Star.svg"
//                         alt="Рейтинг"
//                         width={23}
//                         height={23}
//                     />
//                     <h3 className="text-[#838383] ms-[10px]">{rating}</h3>
//                 </div>
//                 <button
//                     onClick={() => onBuy(productName)}
//                     className="text-black rounded"
//                 >Купить
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CartIcon;
'use client';

import Image from 'next/image';
interface Product {
        image: string;
        name: string
        price: number;
        oldPrice: number;
        rating: number;
        // alt: string;
        id: string
    };

    export default function ProductCard({ product }: { product: Product }) {
        const handleAddToCart = () => {
          const existingCart = JSON.parse(sessionStorage.getItem('cart') || '[]');
      
          // Проверим, есть ли уже такой товар в корзине
          const index = existingCart.findIndex((item: Product) => item.id === product.id);
      
          if (index !== -1) {
            // Если есть, увеличим quantity
            existingCart[index].quantity += 1;
          } else {
            // Если нет — добавим с quantity = 1
            existingCart.push({ ...product, quantity: 1 });
          }
      
          sessionStorage.setItem('cart', JSON.stringify(existingCart));
        };
      
        return (
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <Image src={product.image} alt={product.name} width={200} height={200} />
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.price}₽</p>
            <p className="line-through text-sm text-gray-400">{product.oldPrice}₽</p>
            <p className="text-sm">⭐ {product.rating}</p>
            <button
              onClick={handleAddToCart}
              className="mt-2 px-4 py-2 bg-black text-white rounded"
            >
              Купить
            </button>
          </div>
        );
      }
