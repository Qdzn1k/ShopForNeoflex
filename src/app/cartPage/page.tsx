'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  image: string;
  name: string
  price: number;
  oldPrice: number;
  rating: number;
  // alt: string;
  id: string
  quantity: number
};

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const data = sessionStorage.getItem('cart');
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Корзина</h1>
      <div className='grid grid-cols-2'>
        <div className='space-y-[20px]'>
          {cart.length === 0 && <p>Корзина пуста</p>}
          {cart.map((item, index) => (
            <div key={index} className=" font-semibold bg-white rounded-[30px] px-[18px] pt-[18px] pb-[12px]">
              <div className=' flex items-stretch h-full'>
                <div className='flex items-center'>
                  <Image
                    src={item.image}
                    alt="Рейтинг"
                    width={144}
                    height={144}
                  />
                  <div className='ms-[23px] items-center'>
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-[12px] text-sm text-gray-500">{item.price} ₽</p>
                  </div>
                </div>

                <div className='flex flex-col justify-between ml-auto'>
                  <p className="text-right">x{item.quantity}</p>
                  <p className="text-right font-bold">
                    {item.price * item.quantity}₽
                  </p>
                </div>
              </div>
              <div className='ms-6 flex items-center justify-between'>
                <div className="flex items-center">
                  <button
                    // onClick={handleDecrement}
                    className="bg-[#FFCE7F] px-2 rounded-full text-white"
                  >
                    −
                  </button>
                  <span className='w-10 text-center text-[#1C1C27]'>{item.quantity}</span>
                  <button
                    // onClick={handleIncrement}
                    className="bg-[#FFCE7F] px-2 rounded-full text-white"
                  >
                    +
                  </button>
                </div>
              </div>


            </div>
          ))}
        </div>
        <div>
          Ffg
        </div>
      </div>

    </div>
  );
}
