import  {  Outlet ,Link} from "react-router-dom";


export default function Help() {
  return (
 <>
       <div className="text-3xl font-bold font-mono mt-10 ">

       <h2 className="mb-4">Click on below Nested routes </h2>
       <Link className="text-3xl font-bold font-mono mt-10 mr-4 bg-red-500" to="faq">Faq</Link>
       <Link  className="text-3xl font-bold font-mono mt-10 bg-red-500" to="contact">contact</Link>

</div>
<Outlet/>
 </>

  )
}
