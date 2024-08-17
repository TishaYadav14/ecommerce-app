import { useState, useEffect, FC } from 'react';
import ProductCard from '../components/Cards/ProductCard';
import { fetchProducts } from '../utils/api';
import PopupCard from '../components/Cards/PopupCard';
import { Product } from '../utils/types';
import SkeletonCard from '../components/Cards/SkeletonCard';

const Home: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [popupItem, setPopupItem] = useState<Product | null>(null);

  const onAddToCart = (product: Product, discountedPrice: number) => {
    // trigger popupcard on adding an item
    setPopupItem({ ...product, price: discountedPrice });
    // hide the popup after few sec
    setTimeout(() => {
      setPopupItem(null);
    }, 2500);
  };

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-1 md:p-4 my-4 md:my-2">
      <h1 className="text-3xl text-center font-bold mb-2">Products List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              // show skeleton cards in loading state
              <SkeletonCard key={index} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
      </div>
      {popupItem && <PopupCard item={popupItem} onClose={() => setPopupItem(null)} />}
    </div>
  );
};

export default Home;
