import { Outlet } from "react-router-dom";
import SideBar from "../Pages/Common/Sidebar/SideBar";
import Footer from "../Pages/Common/Footer/Footer";
import Header from "../Pages/Common/Header/Header";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-[1400px] mx-auto ">
      <Header></Header>
      <div className="grid grid-cols-4">
        <div className="hidden md:block col-span-1 ">
          <SideBar></SideBar>
        </div>
        <div className="bg-red-300 ">
          <Outlet />
        </div>
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
