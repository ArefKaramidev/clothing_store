import { products } from "../../constants/products";
import Card from "./card";

const TopSell = () => {
  return (
    <div className="text-center">
      <span className="font-extrabold text-5xl inline-block">TOP SELLING</span>
      <div className="flex items-center justify-evenly mt-20 flex-wrap gap-y-10">
        {products.map((item) =>
          item.categury == "top_sell" ? (
            <Card
              image={item.image}
              price={item.price}
              productName={item.productName}
              quality={item.quality}
            />
          ) : null
        )}
      </div>
      <button className="rounded-full px-5 py-3 bg-white text-lg border border-gray-300 cursor-pointer w-60 mt-16">
        View All
      </button>
    </div>
  );
};

export default TopSell;
