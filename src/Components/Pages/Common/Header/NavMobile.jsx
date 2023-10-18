import { useState } from "react";
import SideBar from "../Sidebar/SideBar";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:hidden relative gap-4 w-screen flex items-center justify-between p-3 ">
      {/* logo */}
      <div className="mr-auto text-2xl font-bold font-mono">
        <Link to="/">Fably</Link>
      </div>

      {/* home icon */}
      <div className="rounded-full p-1 hover:shadow-md">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
      </div>
      {/* cart icon */}
      <div className="rounded-full p-1 hover:shadow-md">
        <Link to="/user/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </Link>
      </div>

      {/* store icon */}
      <div className="rounded-full p-1 hover:shadow-md">
        <Link to="/all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </Link>
      </div>

      {/* search icon */}
      <div className="rounded-full p-1 hover:shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
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
          stroke="black"
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
        className={`  z-20 right-0  ease-out top-0  fixed w-9/12 h-full shadow-2xl bg-white ${
          open ? "visible" : "hidden"
        }  transition duration-300`}
      >
        <div
          onClick={() => setOpen(() => !open)}
          className="-right-2 top-3 bg-gray-200 hover:bg-gray-300 rounded-full p-2  mr-4 absolute hover:shadow "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-7 inline h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="p-4 flex flex-col h-full mt-4 justify-between">
          <SideBar></SideBar>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
