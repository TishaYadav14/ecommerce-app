import React, { useState } from 'react';

interface PromoCodeInputProps {
  applyPromoCode: (code: string) => void;
  errorMessage: string;
  successMessage: string;
}

const PromoCodeInput: React.FC<PromoCodeInputProps> = ({ applyPromoCode, errorMessage, successMessage }) => {
  const [promoCode, setPromoCode] = useState<string>('');

  const handleApplyPromoCode = () => {
    applyPromoCode(promoCode);
  };

  return (
    <div className="mb-4">
      <label htmlFor="promoCode" className="block text-lg font-semibold mb-2 text-slate-900">
        Enter Promo Code
      </label>
      <input
        type="text"
        id="promoCode"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        className="w-full p-2 border border-slate-300 rounded-md text-slate-900"
        placeholder="Try SAVE10 for some discount"
      />
      <button
        onClick={handleApplyPromoCode}
        className="w-full bg-slate-900 text-white py-2 mt-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Apply Promo Code
      </button>
      {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
      {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
    </div>
  );
};

export default PromoCodeInput;
