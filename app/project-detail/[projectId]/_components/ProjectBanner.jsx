import React from "react";
import Image from "next/image";

const ProjectBanner = ({ product }) => {
  return (
    <div>
      {product ? (
        <div className='w-full'>
          <Image
            src={product?.attributes?.banner?.data?.attributes?.url}
            alt={product?.attributes?.title}
            width={600}
            height={400}
            className='rounded-lg border-2 object-cover'
          />
        </div>
      ) : (
        <div className='w-[600px] h-[400px] bg-slate-200 animate-pulse'></div>
      )}
    </div>
  );
};

export default ProjectBanner;
