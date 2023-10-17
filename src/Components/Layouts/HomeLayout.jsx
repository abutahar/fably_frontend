import { Outlet } from "react-router-dom";
import Header from "../Pages/Common/Header/Header";
import Footer from "../Pages/Common/Footer/Footer";

function HomeLayout() {
  return (
    <>
      <div className="max-w-[1400px] min-h-screen mx-auto flex flex-col">
        <div className="z-50 sticky top-0   right-0 left-0">
          <Header></Header>
        </div>

        <div>
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
