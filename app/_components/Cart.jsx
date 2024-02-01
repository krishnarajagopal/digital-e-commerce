'use client'
import React, { useContext ,useState, useEffect} from "react";
import { CartContext } from "../_context/CartContext";
import { useUser } from "@clerk/nextjs";
import GetCartItems from '../_utils/GetCartItems';

const Cart = () => {
  const { isSignedIn,user}=useUser()
// const{cart,setCart} =useContext(CartContext)
const[cart,setCart] =useState([])

      console.log(`is user signed in :  ${isSignedIn}  user email for cart:${user?.primaryEmailAddress?.emailAddress}   cart items to display: ${JSON.stringify(cart,null,"  ")}`);
  return (
    <div className='w-[300px] h-[250px] bg-gray-100 rounded-md absolute z-10 mx-10 my-4 right-10 top-12 p-5 border shadow-sm overflow-auto'>
      {/* <div className='mt-4 space-y-6'>
        <ul className='space-y-4'>{cart?.map((item, index) => {
                  <li className='flex items-center gap-4'>
                  <img
                    src={item?.attributes?.products?.data?.attributes?.banner?.data?.attributes?.url}
                    alt=''
                    className='h-16 w-16 rounded object-cover'
                  />
      
                  <div>
                    <h3 className='text-sm text-gray-900'>{item?.attributes?.products?.data?.attributes?.title}</h3>
      
                    
                      </div>
                </li>
        })}</ul>
      </div> */}
      <div className='space-y-4 text-center mt-5'>
        {/* <a
        href="#"
        className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart (2)
      </a> */}

        <a
          href='#'
          className='block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600'>
          View my cart (2)
        </a>

        <a
          href='#'
          className='inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600'>
          Continue shopping
        </a>
      </div>
    </div>
  );
};

export default Cart;
