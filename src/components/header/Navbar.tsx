import cartIcon from "../../assets/cart.svg";
import userIcon from "../../assets/user.svg";

const Navbar = () => {
  return (
    <header className="flex items-center justify-evenly w-full h-20">
      <span className="text-black font-extrabold text-3xl">SHOP.CO</span>
      <div className="flex items-center gap-x-10 curp">
        <span className="text-slate-600 text-lg font-medium">Shop</span>
        <span className="text-slate-600 text-lg font-medium">On Sale</span>
        <span className="text-slate-600 text-lg font-medium">New Arrivals</span>
        <span className="text-slate-600 text-lg font-medium">Brands</span>
      </div>
      <input
        type="search"
        className="w-[22%] px-4 py-2 bg-gray-200 outline-none border-none rounded-full "
        placeholder="Search for products..."
      />
      <div className="flex items-center gap-x-10 curp">
        <img src={cartIcon} alt="cartI_con" />
        <img src={userIcon} alt="user_Icon" />
      </div>
    </header>
  );
};

export default Navbar;
