import React, { useState } from 'react'
import logo from "../assest/logo.png";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from '../redux/userSlice';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const NavBar1 = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const userData = useSelector((state) => state.user)
  console.log("userData ===>", userData);

  console.log("User email is", userData.email);
  const userEmail = userData.email


  const handleClick = () => {
    setShowMenu(prev => !prev);

  }
  const handleLogout = () => {
    dispatch(logoutRedux())
    toast.success("Logout is Successfullly")
    navigate('/login')


  }
  console.log(process.env.REACT_APP_ADMIN_EMAIL);
  const adminEmail = process.env.REACT_APP_ADMIN_EMAIL

  const cartItemNumber = useSelector((state)=> state.product.cartItem)
  return (

    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-10 bg-white"style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} >
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="h-10">
            <img src={logo} alt="" className="h-full hover:scale-125 transition-all duration-500" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-5">
          <nav className=' gap-4 md:gap-7 text-base text-white md:text-lg hidden md:flex'>
            <Link to={""} className='hover:scale-125 transition-all duration-300'>Home</Link>
            {/* <Link to={"menu/64dba414313242df9133b521"} className='hover:scale-125 transition-all duration-300'>Menu</Link> */}
            <Link to={"menu/64dfa0c5949be78309ecd514"} className='hover:scale-125 transition-all duration-300'>Menu</Link>
            <Link to={"about"} className='hover:scale-125 transition-all duration-300'>About</Link>
            <Link to={"contact"} className='hover:scale-125 transition-all duration-300'>Contact</Link>

          </nav>


          <div className="hover:scale-125 transition-all duration-300 text-2xl mt-1 text-white  cursor-pointer relative">
           <Link to={"cart"}>
           <BsCartFill />
            </Link>  
            <div className='absolute -top-4 -right-2 text-white bg-red-600 w-5 p-0 rounded-full m-0 h-6 text-base text-center'>
              {cartItemNumber.length}
              </div>
          </div>
          <div className="text-xl cursor-pointer" onClick={handleClick}>
            <div className='hover:scale-125 transition-all text-white duration-300 flex items-center justify-center w-10 h-10 drop-shadow-xl overflow-hidden cursor-pointer rounded-full '>
              {userData.image ? <img src={userData.image} className='h-full w-full ' alt="" /> :
                <FaUserAlt />
              }

            </div>
            {showMenu && <div className='flex flex-col absolute right-2 bg-white py-2 shadow-sm drop-shadow-md min-w-[120px] text-center'>
              {
                userEmail === adminEmail ? 
                <Link to={"newproduct"} className='whitespace-nowrap px-2 cursor-pointer hover:bg-red-500'>New product</Link> : <></>
              }
              {
                userEmail === adminEmail ? 
                <Link to={"orders"} className='whitespace-nowrap px-2 cursor-pointer hover:bg-red-500'>Orders</Link> : <></>
              }

              {
                userData.image ? <p onClick={handleLogout} className='cursor-pointer px-2 text-white bg-red-500'>Logout ({userData.firstName})</p> :
                <Link to={"login"} className='whitespace-nowrap px-2 cursor-pointer hover:bg-red-500'>Login</Link>
              }
              {/* mobile */}
              <nav className='md:gap-7 text-base md:text-lg flex flex-col md:hidden '>
                <Link to={""} className='px-2 py-1'>Home</Link>
                {/* <Link to={"menu/64dba414313242df9133b521"} className='px-2 py-1'>Menu</Link> */}
                <Link to={"menu"} className='px-2 py-1'>Menu</Link>
                <Link to={"menu/64dfa0c5949be78309ecd514"} className='hover:scale-125 transition-all duration-300'>Menu</Link>
                <Link to={"about"} className='px-2 py-1'>About</Link>
                <Link to={"contact"} className='px-2 py-1'>Contact</Link>

              </nav>

            </div>}
          </div>

        </div>
      </div>
    </header>

  )
}

export default NavBar1

