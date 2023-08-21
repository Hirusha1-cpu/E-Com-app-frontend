import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Orders = () => {
    const productCartItem = useSelector((state) => state.product.cartItem)
    console.log("product cart orders page items ====>", productCartItem);

    const userData = useSelector((state) => state.user)
    console.log("userData ===>", userData);

    const [cartItems, setCartItems] = useState([]);

    const getCartItems = async () => {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/cart`, {
            method: "GET",
        });
        const fetchRes = await fetchData.json();
        setCartItems(fetchRes);
    };

    useEffect(() => {
        getCartItems();
    }, []);

    return (
        <div>
            <h2 className='text-bold font-bold mt-2  text-4xl'>Orders</h2>

            <div className='mt-10 pr-5 w-auto flex gap-6 mb-4  flex-col ml-11'>
                {cartItems.map((item, index) => {
                    return (
                        <div key={index} className='border  bg-white flex flex-row justify-between mt-4 gap-3  border-slate-900 p-3'>
                            
                            <span className='text-red-700 font-bold'>
                                <h2 className='text-lg'>{item.name}</h2>
                            </span>
                            <p>{item.user}</p>
                            <p>{item.qty}</p>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Orders
// import React from 'react'
// import { useSelector } from 'react-redux';

// const Orders = () => {
//     const productCartItem = useSelector((state) => state.product.cartItem)
//     console.log("product cart orders page items ====>", productCartItem);

//     const userData = useSelector((state) => state.user)
//     console.log("userData ===>", userData);
//     const cartItems = async () => {
//         const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/cart`, {
//             method: "GET",

//         })
//         const fetchRes = await fetchData.json()
//         console.log(fetchRes);
//     }
//     cartItems()
//     return (
//         <div>
//             <h2 className='text-bold font-bold mt-2 text-4xl'>Orders</h2>

//             <div className='mt-10 w-auto flex gap-6 mb-4  flex-col ml-11'>
//                 {cartItems.map((item, index) => {
//                     return (
//                         <div key={index} className='border  bg-white flex flex-row justify-between mt-4 gap-3  border-slate-900 p-3'>
//                             <h2 className='text-xl'>{item.name}</h2>
//                             <span className='text-red-700 font-bold'>
//                                 <h2 className='text-lg'>{item.name}</h2>
//                             </span>
//                             <p>{item.user}</p>
//                             <p>{item.qty}</p>

//                         </div>
//                     )
//                 })}

//             </div>
//         </div>
//     )
// }

// export default Orders
