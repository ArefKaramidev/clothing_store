const HeroSection = () => {
  return (
    <div className="relative left-0 top-0">
      <img
        src="/vector.png"
        alt="vector"
        className="absolute right-36 top-32"
      />
      <img src="/model.png" alt="model" className="w-full" />
      <img
        src="/vector.png"
        alt="vector"
        className="absolute right-[53rem] top-96 w-16 h-16"
      />

      <div className="flex flex-col absolute gap-y-6 top-32 break-words w-[38rem] left-36">
        <span className="font-extrabold text-7xl text-black ">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </span>
        <span className="text-gray-500">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </span>
        <button className="rounded-full bg-black text-white text-lg border-none w-60 px-4 py-3">
          Shop Now
        </button>

        <div className="flex items-center gap-x-20 mt-10">
          <div className="flex flex-col">
            <span className="text-black font-bold text-5xl">+200</span>
            <span className="text-gray-500 w-36">International Brands</span>
          </div>
          <div className="flex flex-col">
            <span className="text-black font-bold text-5xl">2,000+</span>
            <span className="text-gray-500">High-Quality Products</span>
          </div>
          <div className="flex flex-col">
            <span className="text-black font-bold text-5xl">30,000+</span>
            <span className="text-gray-500">Happy Customers</span>
          </div>
        </div>
      </div>

      <div className="bg-black h-28 flex items-center justify-evenly">
        <img src="/versace.png" alt="versace_logo" />
        <img src="/zara.png" alt="zara_logo" />
        <img src="/gucci.png" alt="gucci_logo" />
        <img src="/prada.png" alt="prada_logo" />
        <img src="/calvin.png" alt="calvin_logo" />
      </div>
    </div>
  );
};

export default HeroSection;
