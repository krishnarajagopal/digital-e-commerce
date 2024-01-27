"use client";

import React, { useState, useEffect } from "react";
import GlobalApi from "../../_utils/GlobalApi";
import BreadCrumbs from "./../../_components/BreadCrumbs";
import ProjectBanner from "./_components/ProjectBanner";
import ProjectInfo from "./_components/ProjectInfo";
import ProductList from "../../_components/ProductList";

const ProductDetail = ({ params }) => {
  const [productDetail, setProductDetail] = useState();
  const [productsInCategory, setProductsInCategory]=useState([]);

  useEffect(() => {
  getProductById_();
  // getProductByCategory_();
  }, []);



  const getProductById_ = () => {
    GlobalApi.getProductById(params?.projectId).then((resp) => {
      setProductDetail(resp.data.data);
      console.log(resp.data.data);
      getProductByCategory_(resp.data.data);
    });
  };

  const getProductByCategory_ = (product) => {
    
    GlobalApi.getProductsByCategory(product?.attributes?.category).then((resp) => {
      console.log(resp.data.data)
  params?.projectId && setProductsInCategory(resp.data.data);
    });
  };



  
  return (
    <div>
      <div className='p-5 px-15'>
        <BreadCrumbs />

        <div className='grid grid-cols-1 sm:grid-cols-2 mt-10   '>
          {productDetail && <ProjectBanner product={productDetail} />}
          {productDetail && <ProjectInfo product={productDetail} />}
        </div>

        { productsInCategory&& <div className='mt-20'>
          <h2 className='font-bold  text-[20px] mb-5'>Similar Products</h2>
         <ProductList  productList={productsInCategory}  isSetLimit={false}/>
         {/* {console.log('product list:')}
         { console.log(productsInCategory)} */}

        </div>} 
      </div>
    </div>
  );
};

export default ProductDetail;
