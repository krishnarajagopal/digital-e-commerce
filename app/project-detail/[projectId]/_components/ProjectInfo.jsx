"use client"
import React, { useContext } from 'react'
import { ShoppingCart } from 'lucide-react';
import { useUser } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import GlobalApi from '../../../_utils/GlobalApi';
import  CartContext  from '../../../_context/CartContext';
import { toast } from "sonner"
import GetCartItems from '../../../_utils/GetCartItems';


const ProjectInfo = ({product}) => {
const { isSignedIn,user}=useUser()
const router=useRouter()
const{cart,setCart} =useContext(CartContext)

console.log (`cart data from productinfo page: ${cart}`)

// Destructuring the product array to get the description of the json
const {attributes:{description:DescriptionArray}}=product

const fullDescription = DescriptionArray.map((item, index) => (item.children[0].text))

// let newCart=[...cart,product]
// console.log(`product info product details : ${JSON.stringify(product)}`);
// console.log(`newCart details : ${JSON.stringify(newCart)}`);

/**
 * Replaces newline characters with <br /> in the whatsIncluded attribute of the product.
 *
 * @return {string} The modified string with newline characters replaced.
 */

function replaceWithBr() {
  return product?.attributes?.whatsIncluded.replace(/\n/g, "<br />")
}



const onAddToCartClick =()=>{
   if (!isSignedIn) {
    router.push('/sign-in')
    return;
   } else {
    const data={
      "data":{
        "userName":user.fullName,
        "email":user.primaryEmailAddress.emailAddress,
        "products":product?.id
      }
    }
    GlobalApi.addToCart(data).then(
    (resp)=>{
      if (resp.statusText==='OK') {
        toast.success('Product added to cart')
      console.log(`Add to cart : ${JSON.stringify(resp)}`)
        GlobalApi.getCartItems(user.primaryEmailAddress.emailAddress).then(
          (resp) => {
            console.log(`latest cart data : ${JSON.stringify(resp.data.data)}`);
            setCart(resp.data.data);
          },
          (err) => {
            console.log(err);
          }
        );
      
    //   console.log(`cart : ${JSON.stringify(cart, null, ' ')}`)

      }

    },
    (err)=>{
      toast.error(`Error while adding to cart :  ${err.message}`)
      console.log(`Error while adding to cart :  ${err.message}`)}
    )


   }

  }

  return (
   
    <div>
      {product ?(   <div>
      <h2 className='text-[20px]'>{product?.attributes?.title}</h2>
      <h2 className='text-[15px] text-gray-500'>{product?.attributes?.category}</h2>
      <h2 className='text-[15px] mt-5 text-gray-700 '>{fullDescription.map((item, index) => <p key={index} className='text-justify pr-5'>{item}</p>)}</h2>

      <h2 className='text-[20px] mt-5'>Whats Included:</h2>
      <h2 className='text-[15px] mt-5'><p dangerouslySetInnerHTML={{__html: replaceWithBr()}}/></h2>
      <h2 className='text-[25px] mt-5 text-primary font-medium'>$ {product?.attributes?.price}</h2>
      
      <button 
      className='flex gap-2 bg-primary rounded-lg p-3 mt-5 text-white hover:bg-blue-600'
      onClick={()=>{
        onAddToCartClick()
      }}
      >
      <ShoppingCart />
        Add to cart</button>
    </div>):
(    <div className='w-[600px] h-[1000px] bg-slate-200 animate-pulse'>

    </div>)}
    </div>

  )
}
export default ProjectInfo