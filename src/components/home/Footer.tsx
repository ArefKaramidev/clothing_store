import twiter from "../../assets/twiter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import papal from "../../assets/papal.svg";
import papal2 from "../../assets/papal2.svg";
import applepay from "../../assets/applePay.svg";
import visa from "../../assets/visa.svg";
import googlepay from "../../assets/googlePay.svg";

const Footer = () => {
  return (
    <footer>
      <div className="grid xl:grid-cols-5 xl:grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-2 lg:grid-cols-3 grid-rows-5 gap-10 mt-20 lg:mx-32 place-items-center grid-flow-col">
        <div className="flex flex-col items-start gap-y-5 w-80 ">
          <span className="font-extrabold text-4xl">SHOP.CO</span>
          <span className="w-72 text-gray-500">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </span>
          <div className="flex items-center gap-x-2">
            <img src={twiter} alt="twiter-icon" />
            <img src={facebook} alt="facebook-icon" />
            <img src={instagram} alt="instagram-icon" />
            <img src={github} alt="github-icon" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-y-5">
          <span className="text-lg font-medium">C O M P A N Y</span>
          <span className="text-gray-500">About </span>
          <span className="text-gray-500">Features</span>
          <span className="text-gray-500">Works</span>
          <span className="text-gray-500">Career</span>
        </div>

        <div className="flex flex-col items-start gap-y-5">
          <span className="text-lg font-medium">H E L P</span>
          <span className="text-gray-500">Customer Support</span>
          <span className="text-gray-500">Delivery Details</span>
          <span className="text-gray-500">Terms & Conditions</span>
          <span className="text-gray-500">Terms & Conditions</span>
        </div>

        <div className="flex flex-col items-start gap-y-5">
          <span className="text-lg font-medium">F A Q</span>
          <span className="text-gray-500">Account</span>
          <span className="text-gray-500">Manage Deliveries</span>
          <span className="text-gray-500">Orders</span>
          <span className="text-gray-500">Payments</span>
        </div>
        <div className="flex flex-col items-start gap-y-5">
          <span className="text-lg font-medium">R E S O U R C E S</span>
          <span className="text-gray-500">Free eBooks</span>
          <span className="text-gray-500">Development Tutorial</span>
          <span className="text-gray-500">How to - Blog</span>
          <span className="text-gray-500">Youtube Playlist</span>
        </div>
      </div>
      <hr className="text-gray-300 mt-20 mx-32" />

      <div className="flex items-center justify-between mx-32 my-5 flex-wrap">
        <span className="text-gray-500">
          Shop.co © 2000-2023, All Rights Reserved
        </span>
        <div className="flex items-center gap-x-2 flex-wrap">
          <img src={visa} alt="visa-icon" />
          <img src={papal} alt="mastercard-icon" />
          <img src={papal2} alt="papal-icon" />
          <img src={applepay} alt="applepay-icon" />
          <img src={googlepay} alt="googlepay-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
