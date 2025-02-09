const DressStyle = () => {
  return (
    <div className="p-10 bg-[#F0F0F0] flex flex-col items-center gap-y-5 container mx-auto rounded-4xl mt-20 flex-wrap">
      <span className="text-5xl font-extrabold mb-10">
        BROWSE BY DRESS STYLE
      </span>
      <div className="flex items-center gap-5 flex-wrap">
        <img src="/casual.png" alt="casual-style" />
        <img src="/formal.png" alt="formal-style" />
      </div>
      <div className="flex items-center gap-5 flex-wrap">
        <img src="/party.png" alt="party-style" />
        <img src="/gym.png" alt="gym-style" />
      </div>
    </div>
  );
};

export default DressStyle;
