import { card } from "../../types/card";

const Card = ({ image, productName, price, quality }: card) => {
  return (
    <div className="flex flex-col items-start gap-y-5">
      <img src={image} alt="productImage" />
      <span className="text-black font-bold text-xl">{productName}</span>
      <img src={quality} alt="stars" />
      <span className="text-black font-bold text-2xl">${price}</span>
    </div>
  );
};

export default Card;
