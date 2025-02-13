import { useParams } from "react-router-dom";
import { products } from "../../constants/products";
import { useCallback, useEffect, useRef, useState } from "react";

const ProductInfo = () => {
  const [count, setCount] = useState(1);
  const inputCount = useRef("");

  useEffect(() => {
    inputCount.current.value = count;
  }, [count]);

  const param: number = Number(useParams().productId);
  console.log(typeof param);

  const product = products.find((item) => item.id == param);

  const countHandler = useCallback((mode: any) => {
    setCount((prevCount) => {
      if (mode == "max") {
        console.log(prevCount);

        return prevCount + 1;
      } else {
        return prevCount > 1 ? prevCount - 1 : prevCount;
      }
    });
  }, []);

  const handleInputChange = useCallback((e: any) => {
    const value = e.target.value;
    if (value < 1) {
      e.target.value = 1;
    }
  }, []);
  return (
    <div className="flex-col flex">
      <div className="flex flex-col justify-start gap-y-7">
        <span className="font-extrabold text-4xl">{product?.productName}</span>
        <img src={product?.quality} alt="quality" className="w-48" />
        <span className="font-medium text-3xl">${product?.price}</span>
      </div>
      <div className="flex flex-col gap-y-2 mt-20">
        <span className="text-gray-500">Select Colors</span>
        <div className="flex items-center gap-x-5">
          <label
            form="color1"
            className="inline-block w-10 h-10 rounded-full bg-green-950"
          >
            <input
              type="radio"
              name="color"
              id="color1"
              hidden
              value={"green"}
            />
          </label>
          <label
            form="color2"
            className="inline-block w-10 h-10 rounded-full bg-black"
          >
            <input
              type="radio"
              name="color"
              id="color2"
              hidden
              value={"black"}
            />
          </label>
          <label
            form="color3"
            className="inline-block w-10 h-10 rounded-full bg-purple-950"
          >
            <input
              type="radio"
              name="color"
              id="color3"
              hidden
              value={"purple"}
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 my-10">
        <span className="text-gray-500">Choose Size</span>

        <div className="flex items-center gap-x-5">
          <label
            form="small"
            className="text-gray-500 text-center inline-block w-32 px-4 py-4 rounded-full bg-gray-100 active:bg-black active:text-white duration-150"
          >
            <input type="radio" name="size" id="small" hidden value={"small"} />
            Small
          </label>
          <label
            form="medium"
            className="text-gray-500 text-center inline-block w-32 px-4 py-4 rounded-full bg-gray-100 active:bg-black active:text-white duration-150"
          >
            <input
              type="radio"
              name="size"
              id="medium"
              hidden
              value={"medium"}
            />
            Medium
          </label>
          <label
            form="large"
            className="text-gray-500 text-center inline-block w-32 px-4 py-4 rounded-full bg-gray-100 active:bg-black active:text-white duration-150"
          >
            <input type="radio" name="size" id="large" hidden value={"large"} />
            Large
          </label>
          <label
            form="x-large"
            className="text-gray-500 text-center inline-block w-32 px-4 py-4 rounded-full bg-gray-100 active:bg-black active:text-white duration-150"
          >
            <input
              type="radio"
              name="size"
              id="x-large"
              hidden
              value={"x-large"}
            />
            X-Large
          </label>
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <div className="bg-gray-100 flex items-center justify-between rounded-full w-48">
          <button
            className="py-2 px-4 rounded-tl-md rounded-bl-md text-3xl"
            onClick={() => countHandler("min")}
          >
            -
          </button>
          <input
            ref={inputCount}
            type="number"
            className="font-medium text-xl border-none outline-none bg-transparent left-1 w-10 text-center"
            defaultValue={count}
            pattern="/^-?\d+\.?\d*$/"
            onInput={handleInputChange}
            aria-label="count"
          />
          <button
            className="px-4 py-2 rounded-tr-md rounded-br-md text-3xl"
            onClick={() => {
              countHandler("max");
            }}
          >
            +
          </button>
        </div>
        <button className="w-96 px-2 py-3 bg-black text-white rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
