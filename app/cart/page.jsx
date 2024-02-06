"use client";
import React, { useContext, useState ,useEffect} from "react";
import CartContext from "../_context/CartContext";
import GlobalApi from "../_utils/GlobalApi"
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner"


const Cart = () => {
  const { isSignedIn,user}=useUser()
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] =useState(0)
  useEffect(()=>{
    cart&&GetTotalAmount()
  },[cart])

  const cartValues = cart.map((item, index) => ({
    id:item?.id,
    image:
      item?.attributes?.products?.data[0]?.attributes?.banner?.data?.attributes
        ?.formats?.small?.url,
    title: item?.attributes?.products?.data[0]?.attributes?.title,
    category: item?.attributes?.products?.data[0]?.attributes?.category,
    price: item?.attributes?.products?.data[0]?.attributes?.price,
  }));

  // console.log(JSON.stringify(cartValues, null, "    "));

  const GetTotalAmount = () => {
    const priceArray = cartValues
      .flatMap(({ price }) => price)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
   setTotal(priceArray.toFixed(2));

  };
  /*
  *Delete cart Item
  *
  */
  const DeleteCartItem_ = (id) => {
    // console.log(`delete id : ${id}`);
    GlobalApi.deleteCartItem(id).then(
    (resp)=>{
      if (resp.statusText==='OK') {
        toast.warning('Product deleted from cart')
        console.log(`Details of deleted item from cart : ${JSON.stringify(resp)}`)
        GlobalApi.getCartItems(user.primaryEmailAddress.emailAddress).then(
          (resp) => {
            console.log(`latest cart data : ${JSON.stringify(resp.data.data)}`);
            setCart(resp.data.data);
          },
          (err) => {
            console.log(err);
          }
        )
      }
    },
    (err)=>{
              toast.error(`Error while deleting cart item :  ${err.message}`)
              console.log(`Error while deleting cart item:  ${err.message}`)
    }
    );
  }


    return (
			<section>
				<div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
					<div className='mx-auto max-w-3xl'>
						<header className='text-center'>
							<h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>
								Your Cart
							</h1>
						</header>

						<div className='mt-8'>
							<ul className='space-y-4'>
								{cartValues.map((item, index) => (
									<li
										className='flex items-center gap-4'
										key={index}>
										<img
											src={item?.image}
											alt=''
											className='h-16 w-16 rounded object-cover'
										/>

										<div>
											<h3 className='text-sm text-gray-900 line-clamp-2 text-balance '>
												{item?.title}
											</h3>

											<dl className='mt-0.5 space-y-px text-[10px] text-gray-600'>
												<div>
													<dt className='inline'>Category:</dt>
													<dd className='inline'>{item?.category}</dd>
												</div>

												<div>
													<dt className='inline text-bold'>Price : $ </dt>
													<dd className='inline text-bold'>{item?.price}</dd>
												</div>
											</dl>
										</div>

										<div className='flex flex-auto w-32 items-center justify-end gap-1'>
											$ {item?.price}
											<button
												className='text-gray-600 transition hover:text-red-600'
												onClick={() => DeleteCartItem_(item?.id)}
												value={item?.id}>
												<span className='sr-only'>Remove item</span>

												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth='1.5'
													stroke='currentColor'
													className='h-4 w-4'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
													/>
												</svg>
											</button>
										</div>
									</li>
								))}
							</ul>

							<div className='mt-8 flex  flex-auto justify-end border-t border-gray-100 pt-8'>
								<div className='w-screen max-w-lg space-y-4'>
									<dl className='space-y-0.5 text-sm text-gray-700'>
										<div className='flex justify-between !text-base font-medium'>
											<dt>Total</dt>
											<dd>$ {total}</dd>
										</div>
									</dl>

									<div className='flex justify-end'>
										<a
											href='/checkout'
											className='block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600'>
											Checkout
										</a>
									</div>
								</div>
							</div>
							<h2 className='text-gray-400 text-[14px] justify-start'>
								Note: All digital content will be sent to the registered email
								address
							</h2>
						</div>
					</div>
				</div>
			</section>
		);

}

export default Cart;
