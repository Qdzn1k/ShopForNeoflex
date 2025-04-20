// CartItem.tsx
import { useState } from 'react';
import Image from 'next/image';

interface Product {
    image: string;
    name: string;
    price: number;
    oldPrice: number;
    rating: number;
    id: string;
    quantity: number;
}

interface CartItemProps {
    item: Product;
    onQuantityChange: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onQuantityChange, onRemove }) => {
    const handleDecrement = () => {
        if (item.quantity > 1) {
            onQuantityChange(item.id, item.quantity - 1);
        }
    };

    const handleIncrement = () => {
        onQuantityChange(item.id, item.quantity + 1);
    };

    return (
        <div className="font-semibold bg-white rounded-[30px] px-[18px] pt-[18px] pb-[12px]">
            <div className='flex items-stretch h-full'>
                <div className='flex items-center justify-end'>
                    <Image
                        src={item.image}
                        alt="Изображение товара"
                        width={144}
                        height={144}
                    />
                    <div className='ms-[23px]'>
                        <p className="font-medium">{item.name}</p>
                        <p className="mt-[12px] text-sm text-gray-500">{item.price} ₽</p>
                    </div>
                </div>

                <div className='flex flex-col justify-between items-end ml-auto'>
                    <button className='w-[20px]'>
                        <Image
                            src='/Bucket.svg'
                            alt="Изображение товара"
                            width={20}
                            height={20}
                        />
                    </button>
                    <p className="text-right font-bold">
                        {item.price * item.quantity}₽
                    </p>
                </div>
            </div>

            <div className='ms-6 flex items-center justify-between'>
                <div className="flex items-center">
                    <button
                        onClick={handleDecrement}
                        className="bg-[#FFCE7F] px-2 rounded-full text-white"
                    >
                        −
                    </button>
                    <span className='w-10 text-center text-[#1C1C27]'>{item.quantity}</span>
                    <button
                        onClick={handleIncrement}
                        className="bg-[#FFCE7F] px-2 rounded-full text-white"
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() => onRemove(item.id)}
                    className="bg-red-500 px-4 py-2 text-white rounded-md"
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default CartItem;
