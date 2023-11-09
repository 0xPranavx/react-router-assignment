import  {  Outlet ,NavLink} from "react-router-dom";


export default function Help() {
  return (
 <>
       <div className="text-3xl font-bold font-mono mt-10 ">

       <h2 className="mb-4"> Nested</h2>
    <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "border-b-2 bg-red-500 mr-4"
                        : isPending
                        ? "mr-4"
                        : "mr-4"
                    } to="faq">Faq</NavLink>
    <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "border-b-2 bg-red-500 mr-4"
                        : isPending
                        ? "mr-4"
                        : "mr-4"
                    }to="contact">contact</NavLink>
</div>
<Outlet/>
 </>

  )
}
