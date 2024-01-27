import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ productList,isSetLimit }) => {
  // console.log('inside productlist:')
  // console.log("productList: "+productList?.length);
 let setLimit=productList?.length
  
  isSetLimit&&(setLimit=5)


  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 gap-3'>
      {productList?.map(
        (item, index) =>
          index <= setLimit && (
            <div key={index}>
              <ProductItem product={item} />
            </div>
          )
      )}
    </div>
  );
};

export default ProductList;
