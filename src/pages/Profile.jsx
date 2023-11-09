import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom";



export default function Profile() {
    const [login ,setLogin] = useState(false);

    function loginHandler (){
        setLogin(true)
    }



  return (
    <>
        <h2 className="text-3xl font-bold font-mono mt-10">click on login to see protected route</h2>
        <button  className="text-3xl font-bold font-mono mt-10 bg-black text-zinc-50" onClick={loginHandler}>login</button>
        {login ? <><Outlet/> <Navigate to="protected-route"/></>:<h1 className="text-3xl font-bold font-mono mt-10">not login</h1>}
        
        

    </>
    
  )
}
