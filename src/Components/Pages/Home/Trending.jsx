const Trending = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className="]">
      <h1 className="ml-4 text-2xl font-semibold">Trending</h1>
      <div className="overflow-x-scroll  flex w-fit">
        {data.map((d) => (
          // card
          <div key={d.value} className="group">
            <div className=" relative w-80  rounded p-2">
              {/* this is card container */}
              <div className=" w-full">
                <img
                  className="h-96 p-2 transition-all duration-300 group-hover:scale-105 w-96"
                  src="./banner_shoe.jpg"
                />
              </div>
              <div className="z-10  transition-all my-4 flex flex-col gap-2 rounded  ">
                <h2 className="px-2">{d.title || "dfsdf"}</h2>
                <h1 className="px-2">{d.desc || "dsfsd"}</h1>
                <button className="bg-black rounded-full px-3 text-white py-1 mt-2">
                  buy now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
