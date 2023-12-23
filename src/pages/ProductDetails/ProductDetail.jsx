import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/?id=${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);
  console.log(product?.variations);
  return (
    <div className="container mx-auto my-8">
    <div className="flex">
      <div className="w-1/2 p-4">
        <img className="w-full h-screen" src={product?.image} alt="" />
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-3xl font-semibold mb-4">{product?.title}</h2>
        {product &&
          product.variations &&
          product.variations.map((variation) => (
            <div key={variation.id} className="mb-4">
              <strong>Color: {variation.color}</strong>
              <div className="flex flex-wrap mt-2">
                {variation.size.map((size) => (
                  <span
                    key={size}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded m-1 text-sm"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  );
};

export default ProductDetail;
