import { Outlet } from "react-router-dom";


export default function Product_layout() {
  return (
    <>
        <div>
        <h2 className="text-3xl font-bold font-mono mt-10">Product Page</h2>
        <h2 className="text-xl font-bold font-mono mt-10">add parameter in URL </h2>
        </div>
        <main>
            <Outlet/>
        </main>
    </>
  )
}
