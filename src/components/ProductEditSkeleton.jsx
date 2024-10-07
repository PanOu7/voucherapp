import React from 'react';

const ProductEdditSkeleton = () => {
  return (
    <div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-300 bg-gray-300 rounded-lg animate-pulse h-4 w-24"></label>
        <div className="bg-gray-200 rounded-lg h-10 w-full animate-pulse"></div>
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-sm font-medium text-gray-300 bg-gray-300 rounded-lg animate-pulse h-4 w-24"></label>
        <div className="bg-gray-200 rounded-lg h-10 w-full animate-pulse"></div>
      </div>
      <div className="mb-3">
        <div className="flex items-center mb-4">
          <div className="w-4 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="ms-2 text-sm bg-gray-300 rounded-lg animate-pulse h-4 w-64"></div>
        </div>
      </div>
      <div className="mb-3">
        <div className="flex items-center mb-4">
          <div className="w-4 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="ms-2 text-sm bg-gray-300 rounded-lg animate-pulse h-4 w-64"></div>
        </div>
      </div>
      <div className="flex space-x-3">
        <div className="py-2.5 px-5 mb-2 text-sm font-medium bg-gray-200 rounded-lg animate-pulse h-10 w-24"></div>
        <div className="py-2.5 px-5 mb-2 text-sm font-medium bg-emerald-200 rounded-lg animate-pulse h-10 w-32"></div>
      </div>
    </div>
  );
}

export default ProductEdditSkeleton;
