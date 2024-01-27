import React from 'react'
import  Image  from 'next/image';

const ProjectBanner = ({product}) => {

  return (
    <div>

      <Image src={product?.attributes?.banner?.data?.attributes?.url} alt={product?.attributes?.title} width={600} height={400} className='rounded-lg border-2 object-cover' />

      </div>
  )
}

export default ProjectBanner