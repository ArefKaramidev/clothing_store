import { NavLink } from "react-router-dom";
import { card } from "../../types/card";

const Card = ({ id, image, productName, price, quality }: card) => {
  return (
    <NavLink to={`/shop/${id}`} className="flex flex-col items-start gap-y-5">
      <img src={image} alt="productImage" />
      <span className="text-black font-bold text-xl">{productName}</span>
      <img src={quality} alt="stars" />
      <span className="text-black font-bold text-2xl">${price}</span>
    </NavLink>
  );
};

export default Card;
