import { Outlet } from "react-router-dom";
import Header from "../Pages/Common/Header/Header";
import Footer from "../Pages/Common/Footer/Footer";

function HomeLayout() {
  return (
    <>
      <div className="max-w-[1400px] min-h-[80vh] md:min-h-[calc(100vh-220px)] mx-auto flex flex-col">
        <div className="sticky top-0 bg-white  z-40">
          <Header></Header>
        </div>

        <div className="z-10">
          <Outlet />
        </div>
      </div>
      <div className="mt-auto bg-black ">
        <div className="max-w-[1400px] mx-auto">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
