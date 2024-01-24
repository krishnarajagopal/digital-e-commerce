"use client";
import React, { useState,useEffect } from "react";
import GlobalApi from "../_utils/GlobalApi";
import ProductList from './ProductList';

const ProductSection = () => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getLatestProducts_();
  }, []);

const getLatestProducts_ = () => {
GlobalApi.getLatestProducts().then((res) => {
  console.log(res.data.data)
  setProductList(res.data.data)
}).catch((err) => console.log(err))
  };

  return productList && (

    <div className="p-5 sm:px-10 md:px-20">
      <h2 className="font-bold  text-[20px] px-1">Latest Resources</h2>
    <ProductList  productList={productList} />
    </div>
    
    )

};


// productList={productList}
export default ProductSection;
