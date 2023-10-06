import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="z-100 w-full flex border sm:border-0 flex-col pl-5 h-screen overflow-hidden">
      <Link
        className="text-xl text-start  hover:shadow-md  my-1   rounded-sm px-4 py-2"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-xl text-start  hover:shadow-md  my-1  rounded-sm px-4 py-2"
        to="/all"
      >
        All products
      </Link>
      <Link
        className="text-xl text-start  hover:shadow-md  my-1  rounded-sm px-4 py-2"
        to="/about"
      >
        About
      </Link>
      <Link
        to=""
        className="text-xl text-start  hover:shadow-md  my-1  rounded-sm px-4 py-2"
      >
        Your Profile
      </Link>
      <Link
        to=""
        className="text-xl text-start  hover:shadow-md  my-1  rounded-sm px-4 py-2"
      >
        Users
      </Link>
      <Link
        to=""
        className="text-xl text-start  hover:shadow-md  my-1  rounded-sm px-4 py-2"
      >
        Add product
      </Link>
      <Link
        to=""
        className="text-xl text-start  hover:shadow-md  my-1  rounded-sm px-4 py-2"
      >
        s
      </Link>{" "}
      <Link
        to=""
        className="text-xl text-start  hover:shadow-md  my-1  rounded-sm px-4 py-2"
      >
        Orders
      </Link>
      <Link
        to=""
        className="text-xl text-start  hover:shadow-md  my-1  rounded-sm px-4 py-2"
      >
        cart
      </Link>
      <Link
        to=""
        className="text-xl text-start  hover:shadow-md  my-1  rounded-sm px-4 py-2"
      >
        Review
      </Link>
    </div>
  );
};
export default SideBar;
