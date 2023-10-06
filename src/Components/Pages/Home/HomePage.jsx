import Banner from "./Banner";
import FallStyle from "./FallStyle";
import Featured from "./Featured";
import Iconic from "./Iconic";
import Trending from "./Trending";

const HomePage = () => {
  return (
    <div>
      {/* banner section */}
      <Banner></Banner>
      {/* trending section  */}
      <Trending></Trending>
      {/* featured section */}
      <Featured></Featured>
      {/* Iconic */}
      <Iconic></Iconic>
      {/* new fall style */}
      <FallStyle></FallStyle>
    </div>
  );
};

export default HomePage;
