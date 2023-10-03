import { Outlet } from "react-router-dom";
import Header from "../Pages/Common/Header/Header";
import Footer from "../Pages/Common/Footer/Footer";

function HomeLayout() {
  return (
    <div className="max-w-[1400px] min-h-screen mx-auto px-6 flex flex-col">
      <Header></Header>

      <div className=" bg-red-400">
        <Outlet />
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default HomeLayout;
