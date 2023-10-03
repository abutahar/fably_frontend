import { Outlet } from "react-router-dom";
import Header from "../Pages/Common/Header/Header";

const VerifyLayout = () => {
  return (
    <div>
      <h1>this is verify page</h1>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default VerifyLayout;
