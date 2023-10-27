import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Components/Layouts/HomeLayout";
import DashboardLayout from "../Components/Layouts/DashboardLayout";
import VerifyLayout from "../Components/Layouts/VerifyLayout";
import HomePage from "../Components/Pages/Home/HomePage";
import About from "../Components/Pages/About/About";
import AllProducts from "../Components/Pages/All_products/AllProducts";
import Login from "../Components/Pages/Verify/Login";
import Register from "../Components/Pages/Verify/Register";

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
        element: <AllProducts />,
      },
    ],
    errorElement: <>some thing went wrong</>,
  },
  {
    path: "/user",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <>this is dashboard</>,
      },
      {
        path: "profile",
        element: <>this is profile page of user</>,
      },
    ],
  },

  {
    path: "/verify",
    element: <VerifyLayout></VerifyLayout>,
    children: [
      {
        path: "/verify",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
