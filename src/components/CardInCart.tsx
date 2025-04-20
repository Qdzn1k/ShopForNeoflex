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
                <div className='flex justify-between items-center'>

                    <div className='flex flex-col items-center w-[147px]'>
                        <Image className=''
                            src={item.image}
                            alt="Изображение товара"
                            width={144}
                            height={144}
                        />
                        <div className='mt-[20px] flex items-center justify-between'>
                            <div className="flex items-center">
                                <button
                                    onClick={handleDecrement}
                                    className="bg-[#FFCE7F] px-2 rounded-full text-white cursor-pointer"
                                >
                                    −
                                </button>
                                <span className='w-10 text-center text-[#1C1C27]'>{item.quantity}</span>
                                <button
                                    onClick={handleIncrement}
                                    className="bg-[#FFCE7F] px-2 rounded-full text-white cursor-pointer"
                                >
                                    +
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className='ms-[23px]'>
                        <p className="font-medium">{item.name}</p>
                        <p className="mt-[12px] text-sm text-gray-500">{item.price} ₽</p>
                    </div>

                </div>

                <div className='flex flex-col justify-between items-end ml-auto'>
                    <button className='w-[20px] cursor-pointer' onClick={() => onRemove(item.id)}>
                        <Image
                            src='/Bucket.svg'
                            alt=""
                            width={20}
                            height={20}
                        />
                    </button>
                    <p className="text-right font-bold">
                        {item.price * item.quantity}₽
                    </p>
                </div>
            </div>


        </div>
    );
};

export default CartItem;
