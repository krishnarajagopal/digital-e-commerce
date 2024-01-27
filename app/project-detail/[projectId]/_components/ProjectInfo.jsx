import React from 'react'
import { ShoppingCart } from 'lucide-react';

const ProjectInfo = ({product}) => {

const {attributes:{description:DescriptionArray}}=product

const fullDescription = DescriptionArray.map((item, index) => 

(item.children[0].text)

)
// console.log(fullDescription)
/**
 * Replaces newline characters with <br /> in the whatsIncluded attribute of the product.
 *
 * @return {string} The modified string with newline characters replaced.
 */

function replaceWithBr() {
  return product?.attributes?.whatsIncluded.replace(/\n/g, "<br />")
}

  return (
   
    
    <div>
      <h2 className='text-[20px]'>{product?.attributes?.title}</h2>
      <h2 className='text-[15px] text-gray-500'>{product?.attributes?.category}</h2>
      <h2 className='text-[15px] mt-5 text-gray-700 '>{fullDescription.map((item, index) => <p key={index} className='text-justify pr-5'>{item}</p>)}</h2>

      <h2 className='text-[20px] mt-5'>Whats Included:</h2>
      <h2 className='text-[15px] mt-5'><p dangerouslySetInnerHTML={{__html: replaceWithBr()}}/></h2>
      <h2 className='text-[25px] mt-5 text-primary font-medium'>$ {product?.attributes?.price}</h2>
      
      <button className='flex gap-2 bg-primary rounded-lg p-3 mt-5 text-white hover:bg-blue-600'>
      <ShoppingCart />
        Add to cart</button>
    </div>
  )
}

export default ProjectInfo