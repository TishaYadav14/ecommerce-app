import { FC } from 'react';
import { FaCartPlus, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { Product } from '../../utils/types';

interface PopupCardProps {
  item: Product | null;
  onClose: () => void;
}

const PopupCard: FC<PopupCardProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed top-16 right-4 w-72 md:w-96 bg-white border-2 border-gray-200 rounded-lg shadow-md p-4 my-5 z-50 transform transition-transform duration-500 ease-in-out translate-x-full opacity-0 animate-slide-in">
      <div className="flex items-center">
        <div className="w-1/5 flex justify-center">
          <div className="bg-slate-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
            <FaCartPlus className="text-white" size={20} />
          </div>
        </div>

        <div className="w-4/5 pl-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-slate-900">Added to cart!</span>
            <span className="text-right">
              <FaTimes
                className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-300"
                size={15}
                onClick={onClose}
              />
            </span>
          </div>
          <div className="text-sm text-gray-700 mt-2 cursor-pointer hover:underline">
            {item.title}
          </div>
          <div className="text-base font-semibold text-slate-900 mt-1 mb-2">${item.price.toFixed(2)}</div>
          <Link href="/cart"> {/* Add the Link component */}
            <a
              className="text-sm font-semibold px-4 py-1 mt-3 text-slate-900 border border-slate-900 rounded-full uppercase hover:bg-gray-900 hover:text-white hover:border-gray-800 transition duration-400"
              onClick={onClose} // Close the popup when the button is clicked
            >
              View Cart
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
