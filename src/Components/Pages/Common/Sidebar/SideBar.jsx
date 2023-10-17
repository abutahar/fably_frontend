import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="z-100 w-full flex border sm:border-0 flex-col h-full overflow-hidden">
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
          All Products
        </Link>
        <Link
          to="/dashboard"
          className="text-xl text-start  hover:shadow-md  my-1  rounded-sm px-4 py-2"
        >
          Dashboard
        </Link>
        <Link
          to="/dashboard/user"
          className="text-xl text-start  hover:shadow-md  my-1  rounded-sm px-4 py-2"
        >
          Profile
        </Link>

        <Link
          className="text-xl text-start  hover:shadow-md  my-1  rounded-sm px-4 py-2"
          to="/about"
        >
          About Us
        </Link>
      </div>
      <div className="p-4 text-gray-400">powered by abutahar mondl</div>
    </>
  );
};
export default SideBar;
