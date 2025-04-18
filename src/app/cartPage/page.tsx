'use client';
import { useEffect, useState } from 'react';

interface Product {
    image: string;
    name: string
    price: number;
    oldPrice: number;
    rating: number;
    // alt: string;
    id: string
    quantity:number
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
      {cart.length === 0 && <p>Корзина пуста</p>}
      {cart.map((item, index) => (
        <div key={index} className="border-b py-2 flex justify-between">
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-500">Цена: {item.price}₽</p>
          </div>
          <div>
            <p className="text-right">x{item.quantity}</p>
            <p className="text-right font-bold">
              {item.price * item.quantity}₽
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
