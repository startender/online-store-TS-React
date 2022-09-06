import React, { FC } from "react";
import cn from "classnames";
import { useState } from "react";
import { ICartItem } from "../types";

import cartIcon from "../assets/images/bx-cart.svg";
import logoImage from "../assets/images/image.svg";

const cartItems: ICartItem[] = [
  {
    imagePath: "https://img.mvideo.ru/Pdb/small_pic/200/30043369b.jpg",
    name: "Монитор HP OMEN X",
    count: 1,
    price: 3890,
  },
];

const Header: FC = () => {
  const [isShowCart, setIsShowCart] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <div
      className="flex items-center justify-between relative w-full py-1 px-3"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,0,104,1) 0%, rgba(255,226,0,1) 100%)",
        boxShadow: "1px 3px 30px 0px rgba(50, 50, 50, 0.75)",
      }}
    >
      <img src={logoImage} alt="" width="50" />

      <button
        className="bg-transparent border-none"
        onClick={() => setIsShowCart(!isShowCart)}
      >
        <img src={cartIcon} alt="" width="50" />
      </button>

      <div
        className={cn("absolute right-0 shadow-md p-5 rounded-md", {
          hidden: !isShowCart,
        })}
        style={{
          top: 'calc(61px + 1.5rem)'
        }}
      >
        {cartItems.map((item) => (
          <div className="flex items-center" key={`cart item ${item.name}`}>
            <img
              src={item.imagePath}
              alt={item.name}
              width="155"
              height="55"
              className="mr-3"
            />
            <div>
              <div>{item.name}</div>
              <div>{`${item.count} x ${item.price}`}</div>
            </div>
          </div>
        ))}
        <div className="text-lg">
          Total: <b>{total}</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
