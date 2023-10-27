import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-screen  md:p-5 p-2 mt-10 rounded">
      <h1 className="text-center text-3xl mb-5">Please Singup</h1>
      <form className="w-10/12 shadow-md border-t p-5 shadow-[gray] md:w-1/2 h-full flex flex-col gap-4  mx-auto ">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Your name"
          className="outline-none focus:ring-1 border  px-3 py-2 rounded"
        />
        <input
          type="file"
          name="photo"
          id=""
          placeholder="Your Photo"
          className="outline-none focus:ring-1 border  px-3 py-2 rounded"
        />

        <input
          className="outline-none focus:ring-1 border px-3 py-2 rounded"
          type="email"
          placeholder="Your Email"
          name="email"
          id=""
        />
        <input
          type="password"
          name=""
          placeholder="Type your password"
          id=""
          className="outline-none focus:ring-1 border px-3 py-2 rounded "
        />
        <input
          type="password"
          name=""
          placeholder="confirm your password"
          id=""
          className="focus:ring-1 outline-none border px-3 py-2 rounded "
        />
        <p>
          <span>
            already have account?{" "}
            <Link to="/verify/login">
              <span className="link-secondary">Login here</span>
            </Link>
          </span>
        </p>
        <button
          type="submit"
          className=" px-3 py-2 bg-gray-200 active:bg-gray-100 rounded "
        >
          Register now
        </button>
      </form>
    </div>
  );
};

export default Register;
