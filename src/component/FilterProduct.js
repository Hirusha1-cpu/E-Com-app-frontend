import React from 'react'

import { CiForkAndKnife } from 'react-icons/ci'

const FilterProduct = ({ category,onClick,isActive }) => {
    return (
        <div className='flex flex-col  justify-center items-center' onClick={onClick}>
            <div className={`hover:scale-125 border border-slate-900 transition-all duration-300 text-3xl w-14 h-14 cursor-pointer ${isActive ? "bg-yellow-600 scale-125":"bg-yellow-400" } flex justify-center items-center p-3 bg-yellow-400 rounded-full `}>
                <CiForkAndKnife className={`${isActive ? "text-white":"text-black"} `} />
            </div>
            <p className='text-center  font-bold my-1 capitalize'>{category}</p>
        </div>
    )
}

export default FilterProduct