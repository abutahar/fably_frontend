import { Outlet } from "react-router-dom";
import Header from "../Pages/Common/Header/Header";
import Footer from "../Pages/Common/Footer/Footer";

function HomeLayout() {
  return (
    <div className="max-w-[1400px] min-h-screen mx-auto  flex flex-col">
      <div className="z-50 fixed flex-1 top-0 right-0 left-0">
        <Header></Header>
      </div>

      <div className=" flex-1 mt-14 ">
        <Outlet />
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default HomeLayout;
