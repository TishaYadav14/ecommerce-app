import { Product } from './types';

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('https://dummyjson.com/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  
  // only displaying few products
  return data.products.slice(0, 10); 
}
