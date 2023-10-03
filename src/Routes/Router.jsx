import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Components/Layouts/HomeLayout";
import DashboardLayout from "../Components/Layouts/DashboardLayout";
import VerifyLayout from "../Components/Layouts/VerifyLayout";
import HomePage from "../Components/Pages/Home/HomePage";
import About from "../Components/Pages/About/About";
import AllProducts from "../Components/Pages/All_products/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "all",
        element: <AllProducts></AllProducts>,
      },
    ],
    errorElement: <>some thing went wrong</>,
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "user",
        element: <>this is profile page of user</>,
      },
    ],
  },
  {
    path: "verify",
    element: <VerifyLayout></VerifyLayout>,
    children: [
      {
        path: "login",
        element: <>this is login page</>,
      },
      {
        path: "register",
        element: <>this is register page</>,
      },
    ],
  },
]);

export default router;
