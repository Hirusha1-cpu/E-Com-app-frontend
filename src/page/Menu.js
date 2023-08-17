import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import AllProduct from '../component/AllProduct';
import { addCartItem } from '../redux/productSlice';

const Menu = () => {
  const { filterby } = useParams()
  const dispatch = useDispatch()
  console.log(filterby);
  const productData = useSelector(state => state.product.productList)
  const productDisplay = productData.filter(el => el._id === filterby)[0]
  console.log(productDisplay);
  const handleAddCartProduct = (e) =>{
       
    dispatch(addCartItem(productDisplay))
    

}
  return (
    <div className='p-2 md:p-4'>
      <div className='w-full max-w-3xl m-auto flex md:flex bg-white '>
        <div className='max-w-md overflow-hidden'>
          <img alt='' src={productDisplay.image} className='hover:scale-105 transition-all' />
        </div>
        <div className='px-3 flex flex-col gap-2'>
          <h3 className='font-semibold text-slate-700 capitalize text-2xl md:text-4xl'>{productDisplay.name}</h3>
          <p className=' text-slate-700 font-medium text-2xl'>{productDisplay.category}</p>
          <p className=' font-bold md:text-2xl md'><span className='text-red-500'>Rs.</span><span>{productDisplay.price}</span></p>
          <div className='flex gap-3 py-3'>
          <button className='bg-yellow-500 min-w-[100px] outline hover:outline-red-700 hover:text-black hover:bg-white text-white p-1 rounded-lg mt-1 font-bold'>Buy</button>
          <button onClick={handleAddCartProduct} className='bg-yellow-500 min-w-[100px] outline hover:outline-red-700 hover:text-black hover:bg-white text-white p-1 rounded-lg mt-1 font-bold'>Add Cart</button>
          </div>
          <div>
            <p className='text-slate-600 font-medium'>Description :</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>

      </div>

      <AllProduct heading={"Related Product"}/>
    </div>
  )
}

export default Menu