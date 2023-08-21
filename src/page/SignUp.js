import React, { useState } from 'react'
import loginSignUpImage from '../assest/login-animation.gif'
import { BiShow } from 'react-icons/bi'
import { BiSolidHide } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { ImagetoBase64 } from '../utility/ImageToBase64'
import { toast } from 'react-hot-toast'

const SignUp = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const handleClickPwS = () => {
        setShowPassword(prev => !prev)

    }
    const [showCPassword, setShowCPassword] = useState(false)
    const handleClickPwCS = () => {
        setShowCPassword(prev => !prev)

    }
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        password: "",
        confirmPassword: "",
        image: ""
    })

    console.log(data);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };



    const handleUploadProfileImage = async (e) => {
        console.log(e.target.files[0]);
        const data = await ImagetoBase64(e.target.files[0])
        setData((prev) => {
            return {
                ...prev,
                image: data
            }
        })
        console.log(data);


    }
    console.log(process.env.REACT_APP_SERVER_DOMAIN);

    const handleSubmit = async(e) => {
        e.preventDefault()
        const { firstName, email, password, confirmPassword, address } = data
        if (firstName && email && password && confirmPassword && address) {
            if (password === confirmPassword) {
                const fetchData = await 
                fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`,{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body: JSON.stringify(data)
                })
                const dataRes = await fetchData.json()
                console.log(dataRes);
                // alert(dataRes.message)
                if(dataRes.message==="Email already Registered"){
                    toast.error(dataRes.message)
                }else{

                    toast.success(dataRes.message)
                }
                if(dataRes.alert){
                    navigate('/login')
                }
           
            }
            else {
                toast.error("password and confirm password not equal")
            }
        } else {
            
            toast.error("Please enter all fields")
        }
    }

    return (
        <div className='p-3 shadow-xl md:p-4'>
            <div className='w-full max-w-sm bg-white p-2 m-auto shadow-xl flex flex-col'>
                {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
                <div className='outer-div'>

                    <div className=' z-0 w-20 h-20 rounded-full drop-shadow-xl m-auto relative '>
                        <img src={data.image ? data.image : loginSignUpImage} alt='' className='w-full h-full ' />
                        <label htmlFor='profileImage' >

                            <div className='absolute bottom-0  h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer'>

                                <p className='text-sm p-1 text-white'>Upload</p>
                                <div className='inner-div z-20  absolute -mt-4 -ml-3 bg-slate-700 rounded-full w-6 h-6 text-center items-center flex justify-center text-white'>+</div>
                            </div>
                            <input type={"file"} onChange={handleUploadProfileImage} accept='image/*' id='profileImage' className='hidden' />
                        </label>

                    </div>
                </div>

                <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                    <label htmlFor='firstName' >First Name</label>
                    <input type={'text'} id='firstName' name='firstName'
                        className='mt-1 focus-within:outline-blue-300 mb-2 rounded w-full bg-slate-200 px-2 py-1' onChange={handleOnChange} value={data.firstName} />

                    <label htmlFor='lastName'> Last Name</label>
                    <input type={'text'} id='lastName' name='lastName'
                        className='mt-1 rounded focus-within:outline-blue-300 w-full bg-slate-200 px-2 py-1' onChange={handleOnChange} value={data.lastName} />

                    <label htmlFor='email'> Email</label>
                    <input type={'email'} id='email' name='email'
                        className='mt-1 rounded focus-within:outline-blue-300 w-full bg-slate-200 px-2 py-1' onChange={handleOnChange} value={data.email} />

                    <label htmlFor='address'> Address</label>
                    <input type={'text'} id='address' name='address'
                        className='mt-1 rounded focus-within:outline-blue-300 w-full bg-slate-200 px-2 py-1' onChange={handleOnChange} value={data.address} />

                    <label htmlFor='password'>Password</label>
                    <div className='flex px-2 focus-within:outline focus-within:outline-blue-300 py-1 bg-slate-200  rounded mt-1'>

                        <input type={showPassword ? 'text' : 'password'} id='password' name='password'
                            className=' w-full  bg-slate-200 border-none outline-none ' onChange={handleOnChange} value={data.password} />
                        <span className='flex text-lg gap-2 cursor-pointer' onClick={handleClickPwS}>{showPassword ? <BiShow /> : <BiSolidHide />}</span>


                    </div>

                    <label htmlFor='confirmpassword'>Confirm Password</label>
                    <div className='flex px-2 focus-within:outline focus-within:outline-blue-300 py-1 bg-slate-200  rounded mt-1'>

                        <input type={showCPassword ? 'text' : 'password'} id='confirmPassword' name='confirmPassword'
                            className=' w-full  bg-slate-200 border-none outline-none ' onChange={handleOnChange} value={data.confirmPassword} />
                        <span className='flex text-lg gap-2 cursor-pointer' onClick={handleClickPwCS}>{showCPassword ? <BiShow /> : <BiSolidHide />}</span>

                    </div>

                    <button className='max-w-[150px] mt-5 py-1 m-auto w-full bg-red-700 text-white  rounded-2xl text-center cursor-pointer hover:bg-red-400'>Sign Up</button>




                </form>
                <p className='text-left text-sm'>Already have account ?<Link to={'/login'} className='text-red-600 underline'>Login</Link></p>

            </div>
        </div>
    )
}

export default SignUp