import React from 'react'
import {Link} from 'react-router-dom'

const HomeCard = ({ name, image, category, price, loading,id }) => {
    return (
        <div className='bg-white  shadow-xl p-2 rounded min-w-[150px]'>
            {
                name ? (<>
                 <Link to={`/menu/${id}` }>

                    <div className='min-h-[160px] w-40 '>
                        <img src={image} className='h-full w-full hover:scale-105 transition-all' alt='' />
                    </div>
                    <h3 className='font-semibold text-slate-600 text-center capitalize text-lg'>{name}</h3>
                    <p className='text-center text-slate-500 font-medium'>{category}</p>
                    <p className='text-center font-bold '><span className='text-red-500'>Rs.</span><span>{price}</span></p>
                 </Link>
                </>) :
                    <div className='min-h-[200px] flex justify-center items-center h-full'>
                        <p>{loading}</p>
                    </div>
            }
        </div>
    )
}

export default HomeCard