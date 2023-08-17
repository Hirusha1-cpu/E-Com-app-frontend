import React from 'react'
import {Link} from 'react-router-dom'
import { addCartItem } from '../redux/productSlice'
import { useDispatch } from 'react-redux'

const CardFeature = ({ image, name, price, category, loading,id }) => {
    const dispatch = useDispatch()
    const handleAddCartProduct = (e) =>{
       
        dispatch(addCartItem({
            _id:id,
            name:name,
            price:price,
            category:category,
            image:image,
        }))
        

    }

    return (
        <div className='w-full mt-5 min-w-[200px] max-w-[200px] flex flex-col justify-center p-4 py-6 px-4 drop-shadow-lg bg-white hover:shadow-xl '>
            {
                image ? (
                    <>
                        <Link to={`/menu/${id}` } onClick={()=> window.scrollTo({top:"0", behavior:"smooth"})}>
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

                        <p>{loading}</p>
                    </div>
            }

        </div>
    )
}

export default CardFeature