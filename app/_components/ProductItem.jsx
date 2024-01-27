import React from "react";
import Image from "next/image";
import { Layers3 } from "lucide-react";

const ProductItem = ({ product }) => {
  return (
    <div className='max-w-80 rounded-lg hover:border-2 border-primary p-1 transition-all duration-300'>
      <div>
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt={product?.attributes?.title}
          width={400}
          height={350}
          priority={false}
          placeholder="empty"
          className='rounded-lg h-[170px] border-2 object-fill'
        />
      </div>

      <div className='bg-gray-100 rounded-b-lg'>
        <div className='flex justify-between items-center py-2 '>
          <h2 className='text-[14px] font-medium line-clamp-2'>
            {product?.attributes?.title}
          </h2>
          <h2 className='font-bold'>${product?.attributes?.price}</h2>
        </div>
        <div className=''>
          {product?.attributes?.category && (
            <h2 className='text-[12px] text-gray-400 flex gap-2 '>
              <Layers3 className='h-4 w-4' />
              {product?.attributes?.category}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
