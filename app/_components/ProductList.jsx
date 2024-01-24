import React from 'react'
import ProductItem from './ProductItem';



const ProductList = ({productList}) => {

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 gap-3'>
      {productList.map((item, index) =>index <= 6 && (
        <div key={index}>
          <ProductItem product={item} />
        </div>
      
      ))}
      </div>
  )
}

export default ProductList