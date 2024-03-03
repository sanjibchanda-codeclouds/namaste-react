import { useState } from "react";

import ResturantCard from "./ResturantCard";
import resList from "../utils/MocData";

const Body = () => {
  const [listOfResturant, setlistOfResturant] = useState(resList);

  return (
    <div className="body">
      <div className="filer">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfResturant(filteredList);
          }}
        >
          top rated Resturant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredPrice = resList.filter(
              (res) => res.data.deliveryTime < 30
            );
            setlistOfResturant(filteredPrice);
          }}
        >
          below 30 min
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setlistOfResturant(resList);
            console.log(resList);
          }}
        >
          Reset
        </button>
      </div>
      <div className="resturant-container">
        {listOfResturant.map((Resturant) => (
          <ResturantCard key={Resturant.data.id} resData={Resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
