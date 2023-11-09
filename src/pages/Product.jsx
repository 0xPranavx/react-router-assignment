// Product.js
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <div className="text-3xl font-bold font-mono mt-10">
   
      <p>Product ID: {id}</p>
    </div>
  );
}

export default Product;
