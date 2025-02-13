import versaceLogo from "../../assets/versace.svg";
import gucciLogo from "../../assets/gucci.svg";
import pradaLogo from "../../assets/prada.svg";
import calvinLogo from "../../assets/calvin.svg";
import zaraLogo from "../../assets/zara.svg";

const HeroSection = () => {
  return (
    <div>
      <div className="relative left-0 top-0 overflow-x-hidden flex flex-col-reverse md:inline-block">
        <img
          src="/vector.png"
          alt="vector"
          className="absolute xl:right-36 xl:top-32 w-16 xl:32 top-[37rem] right-10 lg:hidden xl:inline-block"
        />
        <img
          src="/model.png"
          alt="model"
          className="w-[100vw] hidden md:inline-block"
        />
        <img src="/model-mobile.png" alt="model" className="w-full sm:hidden" />
        <img
          src="/vector.png"
          alt="vector"
          className="absolute xl:right-[53rem] xl:top-96 top-[46rem] right-[20rem] xl:w-16 w-10 h-10 xl:h-16 lg:hidden xl:inline-block"
        />

        <div className="xl:top-32 break-words xl:w-[38rem] w-96 xl:left-36 md:left-[5%] md:top-[5%] md:absolute">
          <div className="p-5 xl:p-0 gap-y-6 md:gap-2 lg:gap-y-6 flex flex-col">
            <span className="font-extrabold xl:text-7xl text-4xl text-black ">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </span>
            <span className="text-gray-500">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </span>
            <button className="rounded-full bg-black text-white text-lg border-none xl:w-60 w-full md:w-60 px-4 py-3">
              Shop Now
            </button>
          </div>
          <div className="flex items-center xl:gap-x-20 mt-10 xl:mt-20 gap-5 flex-wrap lg:flex-nowrap justify-center md:hidden xl:flex">
            <div className="flex flex-col">
              <span className="text-black font-bold text-5xl">200+</span>
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
      </div>
      <div className="bg-black h-28 flex items-center justify-evenly flex-wrap gap-3 xl:gap-0 ">
        <img src={versaceLogo} alt="versace_logo" className="w-28 xl:w-36" />
        <img src={zaraLogo} alt="zara_logo" className="w-28 xl:w-36" />
        <img src={gucciLogo} alt="gucci_logo" className="w-28 xl:w-36" />
        <img src={pradaLogo} alt="prada_logo" className="w-28 xl:w-36" />
        <img src={calvinLogo} alt="calvin_logo" className="w-28 xl:w-36" />
      </div>
    </div>
  );
};

export default HeroSection;
