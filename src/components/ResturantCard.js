const ResturantCard = (props) => {
  const { prodData } = props;
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    images,
  } = prodData;

  return (
    <div className="resturant-card">
      <img src={images[0]} alt="images" className="card-img" />
      <h3>{title}</h3>
      <div>
        <p>{description}</p>
        <p>{price} stars</p>
        <p>{discountPercentage}</p>
        <p>{rating}</p>
        <p>{stock}</p>
        <p>{brand}</p>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default ResturantCard;
