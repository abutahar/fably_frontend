import ProductCard from "../Common/Shared/ProductCard";

const AllProducts = () => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 11];
  return (
    <div className="relative">
      <div className="sticky top-[56px] z-40 text-center md:top-[64px] grid grid-cols-4   pb-4 ring-2 bg-white ">
        <input id="r1" className="peer/r1 hidden " type="radio" name="d" />
        <label
          className=" bg-gray-100 md:py-2 peer-checked/r1:bg-gray-300"
          htmlFor="r1"
        >
          All
        </label>
        <input id="r2" className="peer/r2 hidden" type="radio" name="d" />
        <label
          className=" bg-gray-100 md:py-2 peer-checked/r2:bg-gray-300"
          htmlFor="r2"
        >
          Trendings
        </label>
        <input id="r3" className="peer/r3 hidden" type="radio" name="d" />
        <label
          className=" bg-gray-100 md:py-2 peer-checked/r3:bg-gray-300"
          htmlFor="r3"
        >
          Featured
        </label>
        <input id="r4" className="peer/r4 hidden " type="radio" name="d" />
        <label
          className=" bg-gray-100 md:py-2 peer-checked/r4:bg-gray-300"
          htmlFor="r4"
        >
          Favorites
        </label>
      </div>

      {/* data section  */}
      <div className="grid flex-1 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2">
        <>
          {data.map((d) => (
            <ProductCard d={d} key={d}></ProductCard>
          ))}
        </>
      </div>
    </div>
  );
};

export default AllProducts;
