'use client'
import React, {useState, useEffect, useContext} from "react"; 
import Image from "next/image";
import NavBar from "./NavBar";
import {useUser} from '@clerk/nextjs'
import {UserButton} from "@clerk/nextjs"
import {ShoppingCart} from  "lucide-react"
import {usePathname} from 'next/navigation'
import { CartContext } from "../_context/CartContext";
import GlobalApi from "../_utils/GlobalApi";
import Cart from "../_components/Cart";
import GetCartItems from "../_utils/GetCartItems";

const Header = () => {
  const {isSignedIn, user}=useUser()
  const [openCart, setOpenCart]=useState(false);
  const [isSignPage,setSignPage]=useState(false);
  const{cart,setCart} =useContext(CartContext)

  const path =usePathname()



  useEffect(()=>{
  setSignPage(path.toString().includes("sign"))
  if (isSignedIn){GlobalApi.getCartItems(user.primaryEmailAddress.emailAddress).then((resp)=>{
   
    setCart(resp.data.data)
  },(err)=>{
    console.log(err)
  })
}
  },[path,isSignedIn])


  console.log(`latest cart data in header section : ${JSON.stringify(cart,null,"  ")}`)

  return (!isSignPage) && (
    <header className='bg-white  shadow-sm' >

        <div className='flex flex-1 items-center justify-end md:justify-between p-2'>
          <NavBar />

          <div className='flex items-center gap-4'>
            {(!user)?<div className='sm:flex sm:gap-4'>
              <a
                className='hidden sm:block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600'
                href='/sign-in'>
                Login
              </a>

              <a
                className='hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-blue-700 sm:block'
                href='/sign-up'>
                Register
              </a>
            </div>
          :
          <div className='flex items-center gap-4'>
            <h2 className='flex gap-1 cursor-pointer' onClick={()=>setOpenCart(!openCart)}><ShoppingCart  className='text-primary' /> ({cart?.length})</h2>
            <UserButton />           

          </div>  
          }

          {openCart&& <Cart/>}

            <button className='block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden'>
              <span className='sr-only'>Toggle menu</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>

    </header>
  );
};

export default Header;
