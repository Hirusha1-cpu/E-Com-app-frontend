import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addCartItem } from '../redux/productSlice'
import { useDispatch } from 'react-redux'

const CardFeature = ({ image, name, price, category, loading, id }) => {

    const dispatch = useDispatch()
  
    const handleAddCartProduct = (e) => {

        dispatch(addCartItem({
            _id: id,
            name: name,
            price: price,
            category: category,
            image: image,
        }))



    }

    return (
        <div className='w-full mt-5 min-w-[200px] max-w-[200px] flex flex-col justify-center p-4 py-6 px-4 drop-shadow-lg bg-white hover:shadow-xl '>
            {
                image ? (
                    <>
                        <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
                            <div className='h-28 flex flex-col justify-center items-center cursor-pointer '>
                                <img src={image} className='hover:scale-125 transition-all duration-300 h-28 w-20 ' alt='' />

                            </div>
                            <h3 className='font-semibold text-slate-600 capitalize text-lg my-4 whitespace-nowrap overflow-hidden'>{name}</h3>
                            <p className=' text-slate-500 font-medium'>{category}</p>
                            <p className=' font-bold '><span className='text-red-500'>Rs.</span><span>{price}</span></p>
                        </Link>
                        <button onClick={() => handleAddCartProduct()} className='bg-yellow-500 outline w-full cursor-pointer  hover:outline-red-700 hover:text-black hover:bg-white text-white p-1 rounded-lg mt-1 font-bold'>
                            Add Cart
                        </button>
                    </>)
                    :
                    <div className='min-h-[200px] flex items-center justify-center'>

                        <div role="status">
                            <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
            }

        </div>
    )
}

export default CardFeature