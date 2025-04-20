'use client'; // Помечаем этот компонент как клиентский

import { useEffect, useState } from "react";
import CartIcon from "@/components/Cart";
import Link from "next/link";

const CartWrapper = () => {
    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = () => {
        // Загружаем количество товаров из sessionStorage
        const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        const totalQuantity = cart.reduce(
            (sum:number, item:{quantity:number}) => sum + item.quantity,
            0
        );
        setCartCount(totalQuantity)
    };

    useEffect(() => {
        updateCartCount();
    
        // Следим за изменениями в sessionStorage (например, из других компонентов)
        const handleStorage = (e: StorageEvent) => {
          if (e.key === "cart") {
            updateCartCount();
          }
        };
    
        window.addEventListener("storage", handleStorage);
    
        // На случай изменения внутри одной вкладки (например, при клике "Купить")
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