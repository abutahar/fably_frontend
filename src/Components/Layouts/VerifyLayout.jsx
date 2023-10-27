import { Outlet } from "react-router-dom";
import Header from "../Pages/Common/Header/Header";

const VerifyLayout = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default VerifyLayout;
