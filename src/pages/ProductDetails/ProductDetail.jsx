import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProductDetail = () => {
  const { id } = useParams();
  const {user} = useAuth();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://e-commerce-server-site-orpin.vercel.app/product/?id=${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);
  const handleAddToCard = () =>{
    const productInfo = {
        image:product.image,
        title:product.title,
        userEmail:user?.email,
        variation:product.variations
    }
   
    axios.post('https://e-commerce-server-site-orpin.vercel.app/add-product',productInfo).then(res=>{
        if(res.data.insertedId){
            toast.success("Successfully Added to Cart")
        }
    })
  }
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
        <button onClick={handleAddToCard} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  );
};

export default ProductDetail;
