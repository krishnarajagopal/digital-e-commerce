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
  // console.log(res.data.data)
  setProductList(res.data.data)
}).catch((err) => console.log(err))
  };

  const FilterProductList =(category)=>{
    // console.log(`category : ${category}`);
    const result=productList.filter((item)=>item.attributes.category==category)
  // console.log(`result : ${result}`);
  return result
  }
  return productList && (

    <div className="p-5 sm:px-10 md:px-20">
     {/* { console.log(`products : ${productList}  , filterproducts : ${FilterProductList('TUTORIAL')}`)}; */}
    <h2 className="font-bold  text-[20px] px-1">Latest Resources</h2>
    <ProductList  productList={FilterProductList('TUTORIAL') } isSetLimit={true}/>
    {/* Assets */}
    <h2 className="font-bold  text-[20px] px-1 py-2">Assets</h2>
    <ProductList  productList={FilterProductList('ASSETS')} isSetLimit={true} /> 
    </div>
    
    )

};


// productList={productList}
export default ProductSection;
