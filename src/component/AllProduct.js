import React, { useState, useEffect } from 'react'
import FilterProduct from '../component/FilterProduct'
import CardFeature from './CardFeature'
import { useSelector } from 'react-redux'

const AllProduct = ({ heading }) => {

    //filter data display 
    const [filterby, setFilterBy] = useState("")
    const productData = useSelector((state) => state.product.productList)
    const [dataFilterBy, setDataFilterBy] = useState([])
    console.log("Product data home ====>", productData.length);

    const loadingArrayFeature = new Array(6).fill(null)


    const categoryList = [...new Set(productData.map(el => el.category))]
    console.log("Category list ===>", categoryList);
    const handleFilterProduct = (category) => {
        setFilterBy(category)
        const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase())
        setDataFilterBy(() => {
            return [
                ...filter
            ]
        })
    }
    useEffect(() => {
        setDataFilterBy(productData)
    }, [productData])
    return (
        <div className='my-5 pt-3'>
            <h2 className='font-bold text-2xl text-slate-700'>{heading}</h2>
            <div className='flex gap-6 justify-center overflow-scroll scrollbar-none p-3'>
                {
                    categoryList[0] ?
                        categoryList.map((el) => {
                            return (

                                <FilterProduct 
                                key={el} 
                                isActive={el.toLowerCase() === filterby.toLowerCase() }
                                category={el} 
                                onClick={() => handleFilterProduct(el)} />
                            )

                        })
                        :
                        <div className='min-h-[200px] flex items-center justify-center'>

                            <p>Loading...</p>
                        </div>
                }

            </div>
            <div className='flex flex-wrap justify-center gap-4'>
                {
                    dataFilterBy[0] ? dataFilterBy.map(el => {
                        return (
                            <CardFeature
                                key={el._id}
                                id={el._id}
                                image={el.image}
                                name={el.name}
                                category={el.category}
                                price={el.price}

                            />
                        )
                    })
                        :
                        loadingArrayFeature.map((el,index) => <CardFeature loading="Loading..." key={index} />)
                }

            </div>
        </div>
    )
}

export default AllProduct