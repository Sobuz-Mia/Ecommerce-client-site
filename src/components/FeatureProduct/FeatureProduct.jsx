import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const FeatureProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center my-5">Featured Products</h1>
      <div className="grid lg:grid-cols-4" id="product">
        {data?.map((item) => (
          <ProductCard item={item} key={item._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
