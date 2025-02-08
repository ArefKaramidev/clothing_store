import cartIcon from "../../assets/cart.svg";
import userIcon from "../../assets/user.svg";
import menuIcon from "../../assets/menu.svg";
import searchIcon from "../../assets/search.svg";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-5 w-full h-20 md:justify-evenly">
      <div className="flex gap-x-2 ">
        <img src={menuIcon} alt="menu_icon" className="md:hidden" />
        <span className="text-black font-extrabold text-3xl">SHOP.CO</span>
      </div>
      <div className="items-center gap-x-10 curp hidden md:flex">
        <span className="text-slate-600 text-lg font-medium">Shop</span>
        <span className="text-slate-600 text-lg font-medium">On Sale</span>
        <span className="text-slate-600 text-lg font-medium">New Arrivals</span>
        <span className="text-slate-600 text-lg font-medium">Brands</span>
      </div>
      <input
        type="search"
        className="w-[22%] px-4 py-2 bg-gray-200 outline-none border-none rounded-full hidden xl:inline-block"
        placeholder="Search for products..."
      />
      <div className="flex items-center gap-x-2 curp md:gap-x-10">
        <img src={searchIcon} alt="search_icon" className="xl:hidden" />
        <img src={cartIcon} alt="cartI_icon" />
        <img src={userIcon} alt="cartI_icon" />
      </div>
    </header>
  );
};

export default Navbar;
