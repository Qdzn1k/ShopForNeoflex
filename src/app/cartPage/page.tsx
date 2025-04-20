'use client';
import { useEffect, useState } from 'react';
import CardInCart from '@/components/CardInCart';
import Link from 'next/link';

interface Product {
  image: string;
  name: string
  price: number;
  oldPrice: number;
  rating: number;
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

  // Функция для изменения количества товара
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) return;
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    sessionStorage.setItem('cart', JSON.stringify(updatedCart)); // Обновление sessionStorage
    setCart(updatedCart);

    
  };

  // Функция для удаления товара из корзины
  const handleRemove = (id: string) => {
    const updatedCart = cart.filter(item => item.id !== id);
    
    sessionStorage.setItem('cart', JSON.stringify(updatedCart)); // Обновление sessionStorage
    setCart(updatedCart);
  };
  window.dispatchEvent(new Event("cartUpdated"));

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Корзина</h1>
      <div className='grid grid-cols-2'>
        <div className='space-y-[20px]'>
          {cart.length === 0 && (
            <Link href='/' className='font-semibold text-[#1C1C27]'>
              Ваша корзина пуста, давайте это исправим!
            </Link>)}
          {cart.map((item, index) => (
            <CardInCart
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemove} />
          ))}
        </div>
        <div>
          {/* Здесь может быть информация о стоимости заказа или дополнительные элементы */}
          <h2 className="font-semibold text-lg">Итоговая стоимость:</h2>
          <p>
            {cart.reduce((total, item) => total + item.price * item.quantity, 0)} ₽
          </p>
        </div>
      </div>

    </div>
  );
}
