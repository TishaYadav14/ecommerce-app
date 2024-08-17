// pages/_app.tsx
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { CartProvider } from '../context/CartContext';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
