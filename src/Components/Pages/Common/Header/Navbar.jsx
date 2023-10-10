import { Link } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <div className="hidden sm:flex  rounded justify-between items-center bg-base-100">
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
                Join Us
              </button>
            </Link>
          </div>
        </div>

        {/* nav bar in mobile screen */}
        <div className="sm:hidden gap-4 z-40  flex items-center justify-between  rounded">
          {/* logo */}
          <div className="mr-auto text-2xl font-bold font-mono">Fably</div>

          {/* search icon */}
          <div className="rounded-full p-1 hover:shadow-md">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          {/* cart icon */}
          <div className="rounded-full p-1 hover:shadow-md">
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
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>

          {/* profile icon */}
          <div className="rounded-full p-1  hover:shadow-md">
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
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          {/* three bars here */}
          <div
            className="rounded-full p-1 peer/side hover:shadow-md"
            onClick={() => setOpen(() => !open)}
          >
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          {/* sidebar elements */}

          <div
            onClick={() => setOpen(() => !open)}
            className={`fixed z-10  top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-40  ${
              open ? "visible" : "hidden"
            }`}
          ></div>
          <div
            className={`  z-20 right-0  ease-out top-0  fixed w-9/12 h-screen shadow-2xl bg-white ${
              open ? "visible" : "hidden"
            }  transition duration-300`}
          >
            <div
              onClick={() => setOpen(() => !open)}
              className="right-0 top-3 rounded-full p-2  mr-4 absolute hover:shadow hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 inline h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="mt-8 px-4 pt-4">
              <SideBar></SideBar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
