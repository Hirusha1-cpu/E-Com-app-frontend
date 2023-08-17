import React, { useState } from 'react'
import loginSignUpImage from '../assest/login-animation.gif'
import { BiShow } from 'react-icons/bi'
import { BiSolidHide } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { loginRedux } from '../redux/userSlice'

const Login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const handleClickPwS = () => {
        setShowPassword(prev => !prev)

    }

    const [data, setData] = useState({

        email: "",
        password: "",

    })

    // console.log(data);

    const userData = useSelector(state => state)
    // console.log(userData.user);

    const dispatch = useDispatch()

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = data
        if (email && password) {

            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const dataRes = await fetchData.json()
            if(dataRes.message==="Sign up have and error"){
                toast.error(dataRes.message)
            }else{

                toast.success(dataRes.message)
            }
            // alert(dataRes.message)
            console.log(dataRes.message);
            
            if (dataRes.alert) {
                dispatch(loginRedux(dataRes))
                console.log(dataRes.data);
                setTimeout(()=>{
                    navigate('/')
                    
                },2000)
                
            }
            console.log(userData);
        } else {
            alert("Please enter all fields")
        }
    }
    return (
        <div>
            <div className='p-3 shadow-xl md:p-4'>
                <div className='w-full max-w-sm bg-white p-2 m-auto shadow-xl flex flex-col'>
                    {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
                    <div className='w-20 overflow-hidden rounded-full drop-shadow-xl m-auto'>
                        <img src={loginSignUpImage} alt='' className='w-full ' />

                    </div>
                    <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>

                        <label htmlFor='email'> Email</label>
                        <input type={'email'} id='email' name='email'
                            className='mt-1 rounded focus-within:outline-blue-300 w-full bg-slate-200 px-2 py-1' onChange={handleOnChange} value={data.email} />

                        <label htmlFor='password'>Password</label>
                        <div className='flex px-2 focus-within:outline focus-within:outline-blue-300 py-1 bg-slate-200  rounded mt-1'>

                            <input type={showPassword ? 'text' : 'password'} id='password' name='password'
                                className=' w-full  bg-slate-200 border-none outline-none ' onChange={handleOnChange} value={data.password} />
                            <span className='flex text-lg gap-2 cursor-pointer' onClick={handleClickPwS}>{showPassword ? <BiShow /> : <BiSolidHide />}</span>


                        </div>


                        <button className='max-w-[150px] mt-5 py-1 m-auto w-full bg-red-700 text-white  rounded-2xl text-center cursor-pointer hover:bg-red-400'>Login</button>




                    </form>
                    <p className='text-left text-sm'>You dont have account ?<Link to={'/signup'} className='text-red-600 underline'>Sign Up</Link></p>


                </div>
            </div>
        </div>
    )
}

export default Login