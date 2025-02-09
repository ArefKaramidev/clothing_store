import Navbar from "../components/header/Navbar";
import Comments from "../components/home/Comments";
import DressStyle from "../components/home/DressStyle";
import EmailBox from "../components/home/EmailBox";
import Footer from "../components/home/Footer";
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
      <Comments />
      <EmailBox />
      <Footer />
    </div>
  );
};

export default Home;
