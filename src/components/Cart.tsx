
import Image from "next/image";
import React from "react";

type CartIconProps = {
  count: number;
  iconSrc: string;
  alt: string;
  // onClick: () => void; // Функция для обработки клика на будущее (мб бесполезна)
};

const CartIcon: React.FC<CartIconProps> = ({ iconSrc, count, alt}) => {
  return (
    <div className="relative w-[60px] h-[60px] flex items-center justify-center">
      <Image
        src={iconSrc}
        alt={alt}
        width={32}
        height={32}
      />
      {count > 0 && (
        <span className={`absolute top-2 right-1 bg-[#FFA542] text-white font-medium rounded-full w-5 h-5 flex items-center justify-center ${count === 0 ? 'opacity-0' : ''}`}>
          {count}
        </span>
      )}
    </div>
  );
};

export default CartIcon;