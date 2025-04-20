'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Product } from '@/data/products';


interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    const item = cart.find((item: Product) => item.id === product.id);
    setQuantity(item ? item.quantity : 0);

    const handleCartUpdated = () => {
      const updatedCart = JSON.parse(sessionStorage.getItem('cart') || '[]');
      const updatedItem = updatedCart.find((i: Product) => i.id === product.id);
      setQuantity(updatedItem ? updatedItem.quantity : 0);
    };

    window.addEventListener('cartUpdated', handleCartUpdated);
    return () => window.removeEventListener('cartUpdated', handleCartUpdated);
  }, [product.id]);

  const updateCart = (newQuantity: number) => {
    let cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    const index = cart.findIndex((item: Product) => item.id === product.id);

    if (index !== -1) {
      if (newQuantity <= 0) {
        cart.splice(index, 1);
      } else {
        cart[index].quantity = newQuantity;
      }
    } else if (newQuantity > 0) {
      cart.push({ ...product, quantity: newQuantity });
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));
    setQuantity(newQuantity);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleBuy = () => updateCart(1);
  const handleIncrement = () => updateCart(quantity + 1);
  const handleDecrement = () => updateCart(quantity - 1);

  return (
    <div className="flex flex-col items-center rounded-[30px] bg-white items-center justify-center px-[20px] pt-[12px] pb-[32px]">
      <div className='h-[237px] flex items-center'>
        <Image
          src={product.image}
          alt={product.name}
          width={180}
          height={237}
        />
      </div>

      <div className="flex justify-between w-full font-semibold">
        <h3 className="text-[#1C1C27]">{product.name}</h3>
        <p className="text-[#FFA542]">{product.price}₽</p>
      </div>
      <p className="text-sm line-through self-end me-3 text-[#FFCE7F]">{product.oldPrice && product.oldPrice > 0 && `${product.oldPrice} ₽`}</p>
      <div className="mt-[16px] flex justify-between w-full font-semibold">
        <div className="flex items-center">
          <Image
            src="/Star.svg"
            alt="Рейтинг"
            width={23}
            height={23}
          />
          <h3 className="text-[#838383] ms-[10px]">{product.rating}</h3>
        </div>
        {quantity === 0 ? (
          <button
            onClick={handleBuy}
            className="text-black "
          >
            Купить
          </button>
        ) : (
          <div className="flex items-center">
            <button
              onClick={handleDecrement}
              className="bg-[#FFCE7F] px-2 rounded-full text-white"
            >
              −
            </button>
            <span className='w-10 text-center text-[#1C1C27]'>{quantity}</span>
            <button
              onClick={handleIncrement}
              className="bg-[#FFCE7F] px-2 rounded-full text-white"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
