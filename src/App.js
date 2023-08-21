import NavBar1 from "./component/NavBar1";
import {Outlet} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import React, {useEffect } from 'react'
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=> state.product)
  console.log("product data ===>",productData);
  useEffect(()=>{
    (async()=>{
      const res =await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`)
      const resData = await res.json()
      console.log(resData);
      dispatch(setDataProduct(resData))
    })()
  },[])
  return (
    <>
    <Toaster/>
    <div >
     <NavBar1/>
     <main className="pt-16 bg-gradient-to-r from-slate-100 to-yellow-500 min-h-[calc(100nh)]" 
    //  style={{backgroundImage:"url('https://ajoals.com/wp-content/themes/ajoals/css/img/hp-bg1.jpg')"}} 
     >
      <Outlet/>
     </main>
    </div>
    </>
  );
}

export default App;
