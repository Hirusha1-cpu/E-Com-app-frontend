import React, { useRef} from 'react'
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature'
import { FcNext, FcPrevious } from 'react-icons/fc'

import AllProduct from '../component/AllProduct'


const Home = () => {
  const productData = useSelector((state) => state.product.productList)
  console.log("Product data home ====>", productData);
  const homeProductCartList = productData.slice(1, 5)
  const homeProductCartListVegetables = productData.filter(
    el => el.category === 'icecream', []
  )
  console.log("vegees===>", homeProductCartListVegetables);
  const loadingArray = new Array(4).fill(null)
  console.log("array===>", loadingArray);
  const loadingArrayFeature = new Array(10).fill(null)

  const slideProductRef = useRef()

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200
  }

  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200
  }

  const categoryList = [...new Set(productData.map(el => el.category))]
  console.log("Category list ===>", categoryList);

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4' >

        <div className='md:w-1/2 mb-9 '>
          <div className='flex gap-3 bg-slate-400 px-2 w-36 items-center rounded-3xl '>
            <p className='text-sm p-1 font-bold text-slate-900 '>Bike Delivery</p>
            <img src='https://franchise.drive-kindness.com/wp-content/uploads/2020/12/drivekindness-delviery-driver.gif' className='h-8' alt='' />
          </div>
          <h2 className='py-3 text-4xl md:text-7xl font-bold'>The Fasted Delivery in <span className='text-red-600 text-md'>Your Home</span></h2>
          <p className='py-3 text-base max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className="font-bold hover:bg-white hover:text-black outline hover:outline-red-700 bg-red-500 p-2 rounded-full text-white mt-1">Order Now</button>
        </div>
        <div className='md:w-1/2 flex flex-wrap gap-5 mb-9  justify-center p-4'>
          {
            homeProductCartList[0] ? homeProductCartList.map((el) => {
              return (
                <HomeCard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                  

                />

              )
            })
              :
              loadingArray.map((el, index) => {
                return (

                  <HomeCard
                    key={index}
                    loading={"loading.."} />
                )
              })
          }

        </div>


      </div>
      <div className=''>
        <div className='flex w-full items-center '>

          <h2 className='font-bold text-2xl text-slate-700'>Fresh Vegitables</h2>
          <div className='ml-auto flex gap-2'>
            <button className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded-lg hover:scale-125 transition-all duration-300' onClick={prevProduct}><FcPrevious /></button>
            <button className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded-lg hover:scale-125 transition-all duration-300' onClick={nextProduct}><FcNext /></button>
          </div>
        </div>
        <div ref={slideProductRef} className='flex overflow-scroll scrollbar-none  gap-5 scroll-smooth transition-all '>
          {
            homeProductCartListVegetables[0] ?

              homeProductCartListVegetables.map(el => {
                return (
                  <CardFeature
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />

                )
              })
              :
              loadingArrayFeature.map((el,index) => <CardFeature loading="Loading..." key={index} />)
          }
        </div>

      </div>
   <AllProduct heading={"Your Product"}/>

    </div>
  )
}

export default Home