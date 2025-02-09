import Navbar from "../components/header/Navbar";
import DressStyle from "../components/home/DressStyle";
import HeroSection from "../components/home/HeroSection";
import NewArrivals from "../components/home/NewArrivals";
import TopSell from "../components/home/TopSell";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <NewArrivals />
      <TopSell />
      <DressStyle />
    </div>
  );
};

export default Home;
