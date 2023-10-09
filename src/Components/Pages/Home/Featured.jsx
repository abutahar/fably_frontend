const Featured = () => {
  const data = [1, 2, 23, 3];
  return (
    <div>
      <h1 className="text-2xl font-bold px-4">Featured</h1>
      <div className="grid grid-cols-1  gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4 ">
        {data.map((d) => {
          return (
            <div key={d.value} className="group relative">
              <img
                src="./banner_shoe.jpg"
                alt=""
                className="group-hover:-translate-y-1 transition-all duration-200"
              />
              <div className="absolute group-hover:bg-opacity-50 group-hover:rounded transition-all duration-200  bottom-0 bg-black bg-opacity-30 flex flex-col  gap-2">
                <h3 className="text-white pl-4 text-xl ">
                  {d.title || "Fably styles"}
                </h3>
                <h1 className="pl-4 text-white md:text-3xl text-2xl ">
                  {d.disc ||
                    "fixed description adflklf lsafj fjaf askfjsdlfjfjsfjsdfldsjglkjg ff"}
                </h1>
                <button className="mt-4 ml-4  mb-6   px-6 w-fit rounded-full text-white  py-1.5 bg-black   hover:ring-1 hover:text-black hover:bg-white ring-black font-semibold text-lg ">
                  Shop
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
