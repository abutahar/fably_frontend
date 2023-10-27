import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen   md:p-5 p-2 mt-10 rounded">
      <h1 className="text-center text-3xl mb-5">Please Login</h1>
      <form className="shadow-xl border-t w-10/12 md:w-1/2 h-full md:rounded-xl p-5  rounded-md  flex flex-col gap-4  mx-auto ">
        <input
          className="focus:ring-1 outline-none border px-3 py-2 rounded "
          type="email"
          placeholder="Your Email"
          name="email"
          id=""
        />
        <input
          type="password"
          name="password"
          placeholder="Type your password"
          id=""
          className="focus:ring-1 outline-none border px-3 py-2 rounded "
        />
        <p className="flex flex-col ">
          <span>Error message</span>
          <span>
            Don`t have account?{" "}
            <Link to="/verify/register">
              <span className=" link-secondary">Sign up here</span>
            </Link>
          </span>
        </p>
        <button
          type="submit"
          className=" px-3 py-2 rounded bg-gray-200 active:bg-gray-100  "
        >
          Login now
        </button>
      </form>
    </div>
  );
};

export default Login;
