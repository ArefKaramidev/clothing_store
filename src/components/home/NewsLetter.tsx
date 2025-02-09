import emailIcon from "../../assets/email.svg";
const EmailBox = () => {
  return (
    <div className="bg-black mx-2 lg:mx-20 mt-20 rounded-4xl p-10 flex items-center justify-center lg:justify-between gap-y-5 md:justify-center xl:justify-between flex-wrap">
      <span className="font-extrabold text-5xl text-white">
        STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
      </span>
      <div className="space-y-3">
        <div className="flex items-center gap-x-2 bg-white rounded-full w-72 lg:w-96 px-4 py-2">
          <img src={emailIcon} alt="email-icon" />
          <input
            type="email"
            className="rounded-full px-4 py-2 w-80 outline-none border-none"
            placeholder="Enter your email address"
          />
        </div>
        <button className="bg-white rounded-full px-5 py-4 w-72 lg:w-96 font-medium">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};

export default EmailBox;
