"use client";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../_context/CartContext";
import { useUser } from "@clerk/nextjs";
import GetCartItems from "../_utils/GetCartItems";
import { usePathname } from "next/navigation";
import Link from "next/link";


const Cart = () => {
  const { isSignedIn, user } = useUser();
  const { cart, setCart } = useContext(CartContext);
  const pathname = usePathname();
  const [linkNotClicked, setLinkNotClicked] = useState(true);

  // console.log(`is user signed in :  ${isSignedIn}  user email for cart:${user?.primaryEmailAddress?.emailAddress}   cart items to display: ${JSON.stringify(cart,null,"  ")}`);
//  console.log (`link not clicked value BEFORE clicking the button:${linkNotClicked}`)
  return (
    linkNotClicked && (
      <div className='w-[300px] h-[250px] bg-gray-100 rounded-md absolute z-10 mx-10 my-4 right-10 top-12 p-5 border shadow-sm overflow-auto'>
        <div className='mt-4 space-y-6'>
          <ul className='space-y-4'>
            {cart.map((item, index) => (
              <li className='flex items-center gap-4' key={index}>
                <img
                  src={
                    item?.attributes?.products?.data[0]?.attributes?.banner
                      ?.data?.attributes?.formats?.small?.url
                  }
                  alt=''
                  className='h-16 w-16 rounded object-cover'
                />
                <div className='flex flex-col items-start'>
                  <h3 className='text-[12px] text-gray-900 line-clamp-1 '>
                    {item?.attributes?.products?.data[0]?.attributes?.title}
                  </h3>
                  <dl className='mt-0.5 space-y-px text-[10px] text-gray-600'>
                    <div>
                      <dt className='inline'>Category:</dt>
                      <dd className='inline'>
                        {
                          item?.attributes?.products?.data[0]?.attributes
                            ?.category
                        }
                      </dd>
                    </div>

                    <div>
                      <dt className='inline'>Price: $ </dt>
                      <dd className='inline font-bold'>
                        {item?.attributes?.products?.data[0]?.attributes?.price}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Link href='/cart'>
          <div className='space-y-4 text-center mt-5'>
            <div
              className='block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600'
              onClick={() => {
                setLinkNotClicked(!linkNotClicked);
              }}>
              View my cart ({cart?.length})
              {/* {console.log (`link not clicked value after clicking the button:${linkNotClicked}`)} */}
            </div>
          </div>
        </Link>

      </div>
    )
  );
};

export default Cart;
