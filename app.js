import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { resData } = props;
  const { img, name, cuisines, avgRating, costForTwo, deliveryTime } =
    resData?.data;

  return (
    <div className="resturant-card">
      <img src={img} alt="images" className="card-img" />
      <h3>{name}</h3>
      <div>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} stars</p>
        <p>Rs.{costForTwo / 100} for two</p>
        <p>{deliveryTime} minutes</p>
      </div>
    </div>
  );
};

const resList = [
  {
    type: "resturant",
    data: {
      id: 1,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/quyw6jincnbwobblfduf",
      name: "meghna food",
      cuisines: ["North Indian", "Chinese"],
      avgRating: 4.5,
      costForTwo: 40000,
      deliveryTime: 30,
    },
  },
  {
    type: "resturant",
    data: {
      id: 2,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
      name: "Burger",
      cuisines: ["Burger", "Aiasan"],
      avgRating: 4.1,
      costForTwo: 30000,
      deliveryTime: 25,
    },
  },
  {
    type: "resturant",
    data: {
      id: 3,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zlvoq2ruikrpolpsqrdj",
      name: "Chai Factory",
      cuisines: ["Fast Food", "Chinese"],
      avgRating: 3.5,
      costForTwo: 10000,
      deliveryTime: 20,
    },
  },
  {
    type: "resturant",
    data: {
      id: 4,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jc6wdwamsodnr7ugfvos",
      name: "The Bahubally",
      cuisines: ["Fast Food", "NOrth"],
      avgRating: 4.0,
      costForTwo: 15000,
      deliveryTime: 25,
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="resturant-container">
        {resList.map((Resturant, index) => (
          <ResturantCard key={Resturant.data.id} resData={Resturant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
