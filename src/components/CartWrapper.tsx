'use client';

import { useEffect, useState } from "react";
import CartIcon from "@/components/Cart";
import Link from "next/link";

const CartWrapper = () => {
    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = () => {

        const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        const totalQuantity = cart.reduce(
            (sum:number, item:{quantity:number}) => sum + item.quantity,
            0
        );
        setCartCount(totalQuantity)
    };

    useEffect(() => {
        updateCartCount();
    
       
        const handleStorage = (e: StorageEvent) => {
          if (e.key === "cart") {
            updateCartCount();
          }
        };
        // изменения внутри другой вкладки (вроде, но удаление точно видит) 
        window.addEventListener("storage", handleStorage);
    
        // изменения внутри одной вкладки 
        window.addEventListener("cartUpdated", updateCartCount);
    
        return () => {
          window.removeEventListener("storage", handleStorage);
          window.removeEventListener("cartUpdated", updateCartCount);
        };
      }, []);

    return (
    <Link href="/cartPage">
        <CartIcon count={cartCount} iconSrc="/cart.svg" alt="Корзина" />
    </Link>)
};

export default CartWrapper;