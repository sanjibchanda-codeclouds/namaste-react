import { useEffect, useState } from "react";

import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
// import products from "../utils/MocData";

const Body = () => {
  const [productList, setProductList] = useState([]);
  const [products, setProducts] = useState([]);

  const fakeApi = "https://dummyjson.com/products";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(fakeApi);

    const data = await response.json();
    setProductList(data?.products);
    setProducts(data?.products);

    console.log(data);
  };

  // condition rendering
  if (productList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filer">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = products.filter((prod) => prod.price < 1000);
            setProductList(filteredList);
          }}
        >
          below 1000
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredPrice = products.filter((prod) => prod.stock < 50);
            setProductList(filteredPrice);
          }}
        >
          stock
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setProductList(products);
          }}
        >
          Reset
        </button>
      </div>
      <div className="resturant-container">
        {productList.map((product) => (
          <ResturantCard key={product.id} prodData={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
