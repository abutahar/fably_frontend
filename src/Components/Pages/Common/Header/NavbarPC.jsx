import { Link } from "react-router-dom";

const NavbarPc = () => {
  return (
    <>
      <div>
        <Link className="btn border sm:border-0 border-gray-300 btn-ghost normal-case text-xl">
          Fably
        </Link>
      </div>
      <div>
        <ul className="menu menu-horizontal  flex px-1">
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          <Link className="btn  btn-ghost normal-case text-xl" to="/all">
            All products
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/about">
            About
          </Link>
        </ul>
      </div>
      <div>
        <Link to="/dashboard">
          <button className="border sm:border-none border-gray-300 btn btn-ghost normal-case text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavbarPc;
