import { FC, useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const Navbar: FC = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 items-center z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold">
            ESTORE
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-12 ml-10">
          <Link href="/">Home</Link>
          <Link href="/">Category</Link>
          <Link href="/">Collections</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div className="flex items-center space-x-5">
          <Link href="/cart" className="relative">
            <FaShoppingCart className="text-2xl" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link href="/" className='hidden md:block'>
            <FaUser className="text-2xl" />
          </Link>
          {/* Hamburger Icon for Small Screens */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-full bg-gray-900 text-white md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Category</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Collections</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Profile</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
