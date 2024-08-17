import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import OrderSummary from './OrderSummary';
import CartItem from '../Cards/CartItem';
import PromoCodeInput from './PromoCodeInput';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0); 

  const validPromoCodes: { [code: string]: number } = {
    SAVE10: 10,
    SAVE20: 20,
    SAVE50: 50,
  };

  // calculations for total amount
  const taxRate = 0.08;
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * taxRate;
  const totalAfterDiscountAndTax = subtotal - discount + tax;

  const handleApplyPromoCode = (code: string) => {
    const discountPercentage = validPromoCodes[code.toUpperCase()] || 0;
    if (discountPercentage > 0) {
      setDiscount((discountPercentage / 100) * subtotal);
      setErrorMessage('');
      setSuccessMessage(`Congratulations! A discount of ${discountPercentage}% is applied.`);
    } else {
      setDiscount(0);
      setErrorMessage(`The promo code "${code}" is invalid. Please try again.`);
      setSuccessMessage('');
    }
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-semibold mb-4 text-slate-900">Your Cart</h1>

          {cart.length === 0 ? (
            <p className="text-slate-700">Your cart is empty</p>
          ) : (
            <div className="bg-white rounded-lg shadow-md px-2 md:px-6 py-4">
              <div className="hidden md:grid grid-cols-6 items-center mb-4 px-2 text-lg font-semibold text-slate-900 border-b-4 border-slate-700">
                <h3 className="col-span-3">Product</h3>
                <h3 className="text-center">Quantity</h3>
                <h3 className="text-right">Amount</h3>
                <h3 className="text-right">Action</h3>

              </div>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="lg:col-span-1">
            <PromoCodeInput
              applyPromoCode={handleApplyPromoCode}
              errorMessage={errorMessage}
              successMessage={successMessage}
            />
            <OrderSummary
              subtotal={subtotal}
              discount={discount}
              tax={tax}
              totalAfterDiscountAndTax={totalAfterDiscountAndTax}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

