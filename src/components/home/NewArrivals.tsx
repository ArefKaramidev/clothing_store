import { products } from "../../constants/products";
import Card from "./Card";

const NewArrivals = () => {
  return (
    <div className="text-center">
      <span className="font-extrabold text-5xl mt-24 inline-block">
        NEW ARRIVALS
      </span>
      <div className="flex items-center justify-evenly mt-20 flex-wrap gap-y-10">
        {products.map((item) =>
          item.categury == "simple" ? (
            <Card
              key={item.id}
              id={item.id}
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
      <hr className="my-20 container mx-auto text-gray-300" />
    </div>
  );
};

export default NewArrivals;
