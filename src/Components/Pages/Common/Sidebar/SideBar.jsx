import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="z-100 w-full flex border sm:border-0 flex-col h-full overflow-hidden pl-2 ">
        <Link
          className="flex border-b mr-2 hover:border-gray-700 gap-1  items-center justify-start"
          to="/"
        >
          {/* home icon */}
          <div className="w-6">
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>

          <div className="text-xl text-start    my-1   rounded-sm px-4 py-2">
            Home
          </div>
        </Link>

        {/* store  */}
        <Link
          className="flex border-b mr-2 hover:border-gray-700 gap-1  items-center justify-start"
          to="/all"
        >
          <div className="w-6">
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div className="text-xl text-start    my-1  rounded-sm px-4 py-2">
            All Products
          </div>
        </Link>

        {/* profile */}
        <Link
          className="flex border-b mr-2 hover:border-gray-700 gap-1  items-center justify-start"
          to="/user/profile"
        >
          <div className="w-6">
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
          <div className="text-xl text-start    my-1  rounded-sm px-4 py-2">
            Profile
          </div>
        </Link>

        {/* dashboard */}
        <Link
          className="flex border-b mr-2 hover:border-gray-700 gap-1  items-center justify-start "
          to="/user/dashboard"
        >
          <div className="w-6">
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
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
              />
            </svg>
          </div>
          <div className="text-xl text-start  my-1  rounded-sm px-4 py-2">
            Dashboard
          </div>
        </Link>
        <div className="flex border-b mr-2 hover:border-gray-700 gap-1  items-center justify-start">
          <div className="w-6">
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
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </div>

          <Link
            className="text-xl text-start    my-1  rounded-sm px-4 py-2"
            to="/about"
          >
            About Us
          </Link>
        </div>
      </div>
      <div className="p-4 text-gray-400">powered by abutahar mondl</div>
    </>
  );
};
export default SideBar;
