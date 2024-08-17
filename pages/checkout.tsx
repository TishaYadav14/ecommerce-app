import { FC } from 'react';
import Lottie from 'react-lottie-player';
import checkoutAnimation from '../public/success.json';


const Checkout: FC = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-slate-100'>
      <div className="flex flex-col text-center">
      <h1 className="text-3xl font-semibold mb-4 text-slate-900">Checkout</h1>
      <p className="text-slate-700">
        Thank you for your purchase! Your order is being processed.
      </p>
      <div className="flex justify-center mt-7">
        <Lottie
          loop={false}
          speed={0.5}
          animationData={checkoutAnimation}
          play
          style={{ width: 300, height: 300 }}
        />
      </div>
    </div>
    </div>
  );
};

export default Checkout;
