import { NavLink,Outlet } from "react-router-dom"

export default function Root() {
  return (
  <>
      <div className="flex justify-around p-5 bg-red-500">
      
        <h1 className="text-3xl font-bold font-mono ">REACT-ROUTER-DOM</h1>
        <nav >
            <NavLink   className={({ isActive, isPending }) =>
                      isActive
                        ? "border-b-2 border-white mr-4"
                        : isPending
                        ? "mr-4"
                        : "mr-4"
                    } to="/">home</NavLink>
          
            <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "border-b-2 border-white mr-4"
                        : isPending
                        ? "mr-4"
                        : "mr-4"
                    }to="/help">help</NavLink>
                      <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "border-b-2 border-white mr-4"
                        : isPending
                        ? "mr-4"
                        : "mr-4"
                    }to="/product">Product</NavLink>
            <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "border-b-2 border-white mr-4"
                        : isPending
                        ? "mr-4"
                        : "mr-4"
                    }to="/profile">profile</NavLink>
        </nav>
     
      </div>
     <main >
        <Outlet/>
     </main>
  </>
  )
}
