import { createBrowserRouter, RouterProvider , Route , createRoutesFromElements} from "react-router-dom"
import Root from "./pages/root"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Contact from "./pages/help/Contact"
import Faq from "./pages/help/Faq"
import Help from "./pages/Help"
import Product from "./pages/Product"
import Product_layout from "./pages/Product_layout"
import Profile from "./pages/Profile"
import ProtectRoute from "./pages/ProtectRoute"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>} >
      <Route index element={<Home/>} />
      <Route path="*" element={<ErrorPage/>} />
      <Route path="help" element={<Help/>}>
        <Route path="faq" element={<Faq/>} />
        <Route path="contact" element={<Contact/>}/>
      </Route>
      <Route path="product" element={<Product_layout/>}>
        <Route path=":id" element={<Product/>}/>
      </Route> 
      <Route path="profile" element={<Profile/>}>
        <Route path="protected-route" element={<ProtectRoute/>}/>
      </Route>


      

      
    </Route>
    
  )

)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
