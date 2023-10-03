import { Link } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="hidden sm:flex justify-between items-center bg-base-100">
          <div>
            <Link className="btn border border-gray-300 btn-ghost normal-case text-xl">
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
              <button className="border border-gray-300 btn btn-ghost normal-case text-xl">
                Profile
              </button>
            </Link>
          </div>
        </div>
        <div className="block sm:hidden">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div className="drawer ">
                  <div className="drawer-content ">
                    <label tabIndex={0} htmlFor="my-drawer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h7"
                        />
                      </svg>
                    </label>
                  </div>
                  <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                  />

                  <div className="drawer-side ">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay "
                    ></label>
                    <ul className="menu p-4  w-[60%] min-h-full bg-base-200 focus:blur-3xl text-base-content">
                      <SideBar></SideBar>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <Link className="btn btn-ghost normal-case text-xl" to="/">
                Fably
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
