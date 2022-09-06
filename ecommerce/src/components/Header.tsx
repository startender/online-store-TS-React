import React, { FC } from "react";
import cn from "classnames";
import { useState } from "react";
import { ICartItem } from "../types";

import cartIcon from "../assets/images/bx-cart.svg";
import logoImage from "../assets/images/image.svg";

const cartItems: ICartItem[] = [
  {
    _id: "asdasd",
    imagePath: "https://img.mvideo.ru/Pdb/small_pic/200/30043369b.jpg",
    name: "Монитор HP OMEN X",
    count: 1,
    price: 3890,
  },
];

const Header: FC = () => {
  const [isShowCart, setIsShowCart] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const removeHandler = (id: string) => {
    console.log(id);
  };

  return (
    <div
      className="flex items-center justify-between relative w-full py-1 px-3"
      style={{
        background:
          "linear-gradient(90deg, rgba(155,2,104,1) 0%, rgba(155,526,299,1) 100%)",
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
        className={cn("bg-white absolute right-0 shadow-md p-5 rounded-md", {
          hidden: !isShowCart,
        })}
        style={{
          top: 90,
        }}
      >
        {cartItems.map((item) => (
          <div
            className="flex items-center mb-4"
            key={`cart item ${item.name}`}
          >
            <img
              src={item.imagePath}
              alt={item.name}
              width="65"
              height="55"
              className="mr-3"
            />
            <div>
              <div>{item.name}</div>
              <div>{`${item.count} x ${item.price}$`}</div>
              <button
                className="text-red-600 bg-transparent border-0"
                onClick={() => removeHandler(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        
      

        <div className="text-lg border-solid border-t-2 border-red-300 pt-1 mt-5">
          Total: <b>${total}</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
