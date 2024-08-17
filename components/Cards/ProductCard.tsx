import { FC } from 'react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../utils/types';
import { FaShoppingCart } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, discountedPrice: number) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { addToCart } = useCart();

  // calculate the predefined discounted price on individual items if any
  const hasDiscount = product.discountPercentage >= 1;
  const discountedPrice = hasDiscount 
    ? product.price - (product.price * product.discountPercentage) / 100 
    : product.price;

  const handleAddToCart = () => {
    addToCart({ ...product, price: discountedPrice, quantity: 1 });
    onAddToCart(product, discountedPrice);
  };

  return (
    <div className="relative m-4 p-3 w-full max-w-xs flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative flex justify-center items-center h-60 overflow-hidden rounded-xl cursor-pointer border-2 bg-slate-200">
        <img
          className="object-cover w-3/4 h-3/4 transition-transform duration-500 ease-in-out transform hover:scale-110"
          src={product.images[0]}
          alt={product.title}
        />

        {hasDiscount && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 py-1 text-center text-sm font-medium text-white">
            {product.discountPercentage.toFixed(0)}% off
          </span>
        )}
      </div>

      <div className="flex flex-col justify-between h-1/2 mt-4 px-2">
        <h5 className="text-xl font-semibold tracking-tight text-slate-900">{product.title}</h5>
        <div className="mt-2 mb-5 flex items-baseline">
          <span className="text-3xl font-bold text-slate-900">${discountedPrice.toFixed(2)}</span>
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none active:ring-2 active:ring-blue-300"
        >
          <FaShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
