import { Link } from "react-router-dom";

export default function ErrorPage() {
  
  return (
    <div className=" text-3xl font-bold font-mono mt-10">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
     <div>
       <Link className="bg-red-500 mt-10" to="/">Home</Link>
     </div>
    </div>
  );
}