import React, { useState } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { ImagetoBase64 } from '../utility/ImageToBase64'
import { toast } from 'react-hot-toast'

const NewProduct = () => {
    const [data, setData] = useState({
        name: "",
        category: "",
        image: "",
        price: "",
        description: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })

    }
    // console.log(data);

    const uploadImage = async (e) => {
        console.log(e.target.files[0]);
        const data = await ImagetoBase64(e.target.files[0])
        setData((prev) => {
            return {
                ...prev,
                image: data
            }
        })
        // console.log(data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data);

        const { name, category, image, price } = data

        if (name && category && image && price) {

            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadproduct`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const fetchRes = await fetchData.json()
            console.log(fetchRes);
            toast.success("Upload Successfully")
            // Reset the form fields after successful submission
            setData({
                name: "",
                category: "",
                image: "",
                price: "",
                description: ""
            });
        } else {
            toast.error("Please fill all fields")
        }

    }
    return (
        <div className=''>
            <form className='m-auto w-full max-w-md bg-white  drop-shadow-lg mt-2 flex flex-col p-3 ' onSubmit={handleSubmit}>
                <label htmlFor='name' >Name</label>
                <input type={"text"} name='name' className='bg-slate-200 rounded-md p-1 my-1' onChange={handleOnChange} value={data.name} />

                <label htmlFor='category'>Category</label>
                <select className='bg-slate-200 p-1 my-1 rounded-md' name='category' id='category' onChange={handleOnChange} value={data.category}>
                    <option value={"other"}>select category</option>
                    <option value={"fruits"}>Fruits</option>
                    <option value={"vegitables"}>Vegitables</option>
                    <option value={"icecream"}>Ice Cream</option>
                    <option value={"dossa"}>Dossa</option>
                    <option value={"pizza"}>Pizza</option>
                    <option value={"pizza"}>Rice</option>
                    <option value={"pizza"}>Cake</option>
                    <option value={"pizza"}>Burger</option>
                </select>

                <label htmlFor='image'>Image</label>
                <label htmlFor='imgFile'>

                    <div id='image'
            
                        className='h-40 w-full cursor-pointer my-2 rounded-md bg-slate-300 flex items-center justify-center'>
                        {
                            data.image ? <img src={data.image} alt='' className='h-full' /> :
                                <span className='text-5xl'><BsCloudUpload /> </span>
                        }

                    </div>
                    <input type={'file'} onChange={uploadImage} accept='image/*' id='imgFile' className='hidden ' />
                </label>


                <label htmlFor='price' className='my-1'>Price</label>
                <input type={'text'} className='bg-slate-200 rounded-md p-1 my-1' name='price' onChange={handleOnChange} value={data.price} />

                <label htmlFor='description'>Description</label>
                <textarea rows={3} value={data.description} name='description' className='bg-slate-200 rounded-md p-1 my-1 resize-none' onChange={handleOnChange} />

                <button className='bg-red-500 hover:bg-red-400 text-white text-lg font-bold my-1 rounded-md'>Save</button>


            </form>
        </div>
    )
}

export default NewProduct
