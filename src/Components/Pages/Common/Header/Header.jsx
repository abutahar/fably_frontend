import NavMobile from "./NavMobile";
import NavbarPc from "./NavbarPC";

const Header = () => {
  return (
    <div className=" lg:max-w-[1400px]  md:mx-auto">
      <div className="hidden sm:flex  rounded justify-around items-center bg-base-100 ">
        <NavbarPc></NavbarPc>
      </div>

      <NavMobile></NavMobile>
    </div>
  );
};

export default Header;
