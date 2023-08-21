import React from 'react'
import { useSelector } from 'react-redux';

const Orders = () => {
    const productCartItem = useSelector((state) => state.product.cartItem)
    console.log("product cart orders page items ====>", productCartItem);

    const userData = useSelector((state) => state.user)
    console.log("userData ===>", userData);
    return (
        <div>
            <h2 className='text-bold font-bold mt-2 text-4xl'>Orders</h2>
            
            <div className='mt-10 w-auto flex gap-6 mb-4  flex-col ml-11'>
                {productCartItem.map((item) => {
                    return (
                        <div className='border  bg-white flex flex-row justify-between mt-4 gap-3  border-slate-900 p-3'>
                            <h2 className='text-xl'>{item.name}</h2>
                            <span className='text-red-700 font-bold'>
                                <h2 className='text-lg'>{item.qty}</h2>
                            </span>
                            <p>{userData.firstName}</p>
                            <p>{userData.address}</p>
                            
                        </div>
                    )
                })}
             
            </div>
        </div>
    )
}

export default Orders
