import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="p-4 w-full flex flex-col">
      <Link
        className="text-xl text-start hover:bg-gray-300 rounded-xl px-4 py-3"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-xl text-start hover:bg-gray-300 rounded-xl px-4 py-3"
        to="/all"
      >
        All products
      </Link>
      <Link
        className="text-xl text-start hover:bg-gray-300 rounded-xl px-4 py-3"
        to="/about"
      >
        About
      </Link>
      <Link
        to=""
        className="text-xl text-start hover:bg-gray-300 rounded-xl px-4 py-3"
      >
        Your Profile
      </Link>
      <Link
        to=""
        className="text-xl text-start hover:bg-gray-300 rounded-xl px-4 py-3"
      >
        Users
      </Link>
      <Link
        to=""
        className="text-xl text-start hover:bg-gray-300 rounded-xl px-4 py-3"
      >
        Add product
      </Link>
      <Link
        to=""
        className="text-xl text-start hover:bg-gray-300 rounded-xl px-4 py-3"
      >
        Cart
      </Link>
      <Link
        to=""
        className="text-xl text-start hover:bg-gray-300 rounded-xl px-4 py-3"
      >
        Orders
      </Link>
      <Link
        to=""
        className="text-xl text-start hover:bg-gray-300 rounded-xl px-4 py-3"
      >
        Chart
      </Link>
      <Link
        to=""
        className="text-xl text-start hover:bg-gray-300 rounded-xl px-4 py-3"
      >
        Review
      </Link>
    </div>
  );
};
export default SideBar;
