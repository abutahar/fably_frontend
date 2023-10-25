const Query = () => {
  return (
    <div className="sticky top-[56px] z-40 text-center md:top-[64px] grid grid-cols-4 ">
      <input id="r1" className="peer/r1 hidden " type="radio" name="d" />
      <label
        className="bg-gray-100 hover:bg-gray-300 peer-checked/r1:bg-gray-300"
        htmlFor="r1"
      >
        All
      </label>
      <input id="r2" className="peer/r2 hidden" type="radio" name="d" />
      <label
        className="bg-gray-100 hover:bg-gray-300 peer-checked/r2:bg-gray-300"
        htmlFor="r2"
      >
        Trendings
      </label>
      <input id="r3" className="peer/r3 hidden" type="radio" name="d" />
      <label
        className="bg-gray-100 hover:bg-gray-300 peer-checked/r3:bg-gray-300"
        htmlFor="r3"
      >
        Featured
      </label>
      <input id="r4" className="peer/r4 hidden " type="radio" name="d" />
      <label
        className="bg-gray-100 hover:bg-gray-300 peer-checked/r4:bg-gray-300"
        htmlFor="r4"
      >
        Favorites
      </label>

      {/* description section */}

      <div className="hidden col-start-1 ml-0 pl-0 col-end-10 text-start peer-checked/r1:block "></div>
      <div className="hidden col-start-1 ml-0 pl-0 col-end-10 text-start peer-checked/r2:block "></div>
      <div className="hidden col-start-1 ml-0 pl-0 col-end-10 text-start peer-checked/r3:block "></div>
      <div className="hidden col-start-1 ml-0 pl-0 col-end-10 text-start peer-checked/r4:block "></div>
    </div>
  );
};

export default Query;
