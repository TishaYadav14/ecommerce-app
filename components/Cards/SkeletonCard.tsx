import { FC } from 'react';

const SkeletonCard: FC = () => {
  return (
    <div className="relative m-4 p-3 w-full max-w-xs flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md animate-pulse">
      <div className="relative flex justify-center items-center h-60 overflow-hidden rounded-xl cursor-pointer border-2 bg-gray-200">
      </div>
      <div className="flex flex-col justify-between h-1/2 mt-4 px-2">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="mt-2 mb-5 flex items-baseline">
          <div className="text-3xl font-bold text-slate-900 h-8 bg-gray-300 rounded w-1/4"></div>
          <div className="text-sm text-gray-500 line-through ml-2 h-6 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="flex items-center justify-center rounded-md bg-gray-300 h-10 w-full"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
