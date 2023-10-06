import Banner from "./Banner";
import FallStyle from "./FallStyle";
import Featured from "./Featured";
import Iconic from "./Iconic";
// import Trending from "./Trending";
import Trendings from "./Trendings";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* banner section */}
      <Banner></Banner>
      {/* trending section  */}
      {/* <Trending></Trending> */}
      <Trendings></Trendings>
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
