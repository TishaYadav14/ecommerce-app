import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    images: string[];
  };
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, removeFromCart, updateQuantity }) => {
  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="flex flex-col md:grid grid-cols-6 md:flex-row items-start md:items-center border-b py-4 bg-white shadow-sm rounded-md">
      <div className="flex items-center md:col-span-3 space-x-4 p-1 md:p-4">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-24 h-24 object-cover rounded-md border-2"
        />
        <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
      </div>
      <div className="flex w-full  md:col-span-3 items-center justify-between p-2 py-4 ">
        <div className="flex items-center border-2 rounded-md p-1">
          <button
            onClick={handleDecrement}
            className="px-3 py-1 bg-slate-700 rounded-md text-white hover:bg-slate-500"
          >
            -
          </button>
          <div className="w-10 text-center font-semibold text-slate-900">{item.quantity}</div>
          <button
            onClick={handleIncrement}
            className="px-3 py-1 bg-slate-700 rounded-md text-white hover:bg-slate-500"
          >
            +
          </button>
        </div>
        <p className="text-xl font-bold text-slate-900 text-right">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-600 hover:text-red-800 flex-shrink-0"
        >
          <AiOutlineDelete className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
