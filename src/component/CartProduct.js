import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { deleteCartItem , increaseQty, decreaseQty} from '../redux/productSlice'

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
    const dispatch = useDispatch()


    return (
        <div className='bg-slate-200 p-2 flex gap-4 rounded border  border-slate-300'>
            <div className='bg-white p-3 rounded flex items-center justify-center'>
                <img src={image} alt='' className='h-28 object-cover w-36 ' />

            </div>
            <div className='px-3 flex flex-col gap-2 w-full border '>
                <div className='flex justify-between'>
                    
                <h3 className='font-semibold text-slate-700 capitalize text-2xl md:text-xl'>{name}</h3>
                <div className='cursor-pointer text-slate-600 hover:text-red-600 ' onClick={()=> dispatch(deleteCartItem(id))}>
                    <RiDeleteBin5Line />

                </div>
                </div>
                <p className=' text-slate-700 font-medium text-lg'>{category}</p>
                <p className=' font-bold md:text-md md'><span className='text-red-500'>Rs.</span><span>{price}</span></p>

                <div className='flex justify-between gap-3'>
                    <div className='flex gap-3 py-3'>
                        <button
                        onClick={()=> dispatch(increaseQty(id))}
                            className='bg-yellow-500 min-w-[50px] flex items-center justify-center outline hover:outline-red-700 hover:text-black hover:bg-white text-white p-1 rounded-lg mt-1 font-bold'>
                            <AiOutlinePlus />
                        </button>
                        {qty}
                        <button
                        onClick={()=> dispatch(decreaseQty(id))}
                            className='bg-yellow-500 flex items-center justify-center min-w-[50px] outline hover:outline-red-700 hover:text-black hover:bg-white text-white p-1 rounded-lg mt-1 font-bold'>
                            <AiOutlineMinus />
                        </button>
                    </div>
                    <div className='flex items-center gap-2 font-bold px-2 text-slate-800 '>
                        <p>Total</p>
                        
                        <p><span className='text-red-500'>Rs.</span>{total}</p>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default CartProduct