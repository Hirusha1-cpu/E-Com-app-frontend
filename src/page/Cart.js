import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../component/CartProduct';
import emtyCart from '../assest/animation_llez02p9_small.gif'


const Cart = () => {
    const productCartItem = useSelector((state) => state.product.cartItem)
    console.log("product cart items ====>", productCartItem);

    const userData = useSelector((state) => state.user)
    console.log("userData cart===>", userData);

    const totalPrice = productCartItem.reduce((acc, curr) => acc + parseInt(curr.total), 0)
    const totalQty = productCartItem.reduce((acc, curr) => acc + parseInt(curr.qty), 0)

    const handlePay = () => {

    }

    return (
        <>
            <div className='p-2 md:p-4'>
                <h2 className='text-lg sm md:text-2xl font-bold  text-slate-800'>Your Cart Items</h2>

                {productCartItem[0] ?
                    <div className='my-4 flex gap-2'>
                        {/* Dislay cart items */}
                        <div className='w-full max-w-3xl'>
                            {
                                productCartItem.map((el) => {
                                    return (
                                        <CartProduct
                                            key={el._id}
                                            id={el._id}
                                            name={el.name}
                                            category={el.category}
                                            image={el.image}
                                            total={el.total}
                                            price={el.price}
                                            qty={el.qty}
                                            description={el.description} />
                                    )
                                })
                            }
                        </div>

                        {/* total cart item */}
                        <div className='w-full max-w-smd  ml-auto'>
                            <h2 className='bg-blue-500 text-white p-2 text-lg'>Summary</h2>
                            <div className='flex w-full py-2 text-lg border-b'>

                                <p>Total Price</p>
                                <p className='ml-auto w-32 font-bold'><span className='text-red-500'>Rs.</span>{totalPrice}</p>
                            </div>
                            <div className='flex w-full py-2 text-lg border-b'>

                                <p>Total Qty</p>
                                <p className='ml-auto w-32 font-bold'>{totalQty}</p>
                            </div>
                            <div className='border border-red-600 p-5 mt-3 font-bold bg-yellow-600'>
                             
                               <h3 className='bg-white p-2 bg-opacity-60'><span className='text-red-900'>Delivery On: 
                               </span>  {userData.address ? userData.address : <span className='text-red-500'>No Any address Provided</span> }</h3> 
                                <button onClick={handlePay} className='bg-red-500 rounded-lg w-full mt-3 hover:bg-red-400 text-lg font-bold py-2 text-white'>Payment</button>
                                <button className=' mt-2 rounded-lg bg-red-500 w-full hover:bg-red-400 text-lg font-bold py-2 text-white'>Cash On Delivery</button>
                                {/* start */}

                                {/* end */}
                            </div>
                        </div>
                    </div>

                    :
                    <>
                        <div className="w-full  bg-white h-full flex flex-col items-center justify-center">
                            <img src={emtyCart} alt="" className='w-full max-w-sm' />
                            <p className='text-slate-500 text-3xl font-bold'>Empty Cart</p>
                        </div>



                    </>
                }
            </div>
        </>
    )
}

export default Cart