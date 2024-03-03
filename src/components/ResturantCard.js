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

export default ResturantCard;
