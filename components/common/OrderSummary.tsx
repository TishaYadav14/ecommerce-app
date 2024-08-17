import React from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

interface OrderSummaryProps {
  subtotal: number;
  discount: number;
  tax: number;
  totalAfterDiscountAndTax: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  discount,
  tax,
  totalAfterDiscountAndTax,
}) => {
  const { cart, clearCart } = useCart();
//   console.log(discount);

const handlecheckout = () => {
  clearCart();
}

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-slate-900">Order Summary</h3>
      <div className="border-b pb-2 mb-2">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2 text-slate-900">
            <span>{item.title} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="border-b pb-2 mb-2 text-slate-900">
        <div className="flex justify-between text-lg">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-lg text-red-600">
            <span>Discount:</span>
            <span>- ${discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-lg">
          <span>Tax (8%):</span>
          <span>+ ${tax.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-between text-xl font-bold text-slate-900">
        <span>Total:</span>
        <span>${totalAfterDiscountAndTax.toFixed(2)}</span>
      </div>
      <Link href="/checkout">
        <button onClick={handlecheckout} className="w-full bg-slate-900 text-white py-2 mt-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default OrderSummary;
