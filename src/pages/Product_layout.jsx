import { Outlet } from "react-router-dom";


export default function Product_layout() {
  return (
    <>
        <div>
        <h2 className="text-3xl font-bold font-mono mt-10">Product Page</h2>
        </div>
        <main>
            <Outlet/>
        </main>
    </>
  )
}
