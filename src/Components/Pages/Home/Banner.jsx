const Banner = () => {
  return (
    <div>
      <section className="flex flex-col text-center items-center justify-center">
        <div className="block relative  group w-full ">
          <div className=" group-hover:blur-sm transition-all duration-300">
            <img
              src="./banner_shoe.jpg"
              className="  p-4  max-h-[70vh] md:max-h-[70vh] w-screen object-cover "
              alt=""
            />
          </div>
          <div className="absolute inset-0  md:h-2/3   h-full md:top-20 bg-black bg-opacity-50 text-white  rounded-lg px-20 pt-8 ">
            <div className="mb-2 mt-10 md:mb-2  md:mt-6">
              <h3 className="text-base sm:text-lg  font-semibold uppercase">
                For Hoops Culture
              </h3>
              <h1 className="md:text-7xl text-4xl mb-4 w-fit font-semibold  mx-auto transition-all duration-500">
                FULL FORCE STYLE
              </h1>
              <p className=" md:uppercase text-base md:max-w-[70%] mx-auto">
                Introduing Full Force, a new take on the 1980`s Air Force
                family. inspired by the game on court for your looks off court.
              </p>
            </div>
            <button className=" mx-auto opacity-50  group-hover:opacity-100 btn transition-all duration-500 rounded-3xl text-white hover:shadow-2xl bg-black hover:bg-gray-600">
              buy now
            </button>
          </div>
        </div>
        {/* banner title */}
      </section>
    </div>
  );
};
export default Banner;
