import ProductCard from "../Common/Shared/ProductCard";

const AllProducts = () => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 11];
  return (
    <div className="relative">
      <div className="sticky border border-t-0 top-[56px] md:top-[64px] list-none  flex z-40 justify-evenly bg-gray-200 text-center">
        <li className="peer/all border-l hover:bg-gray-300 w-full">All</li>
        <li className="border-l hover:bg-gray-300  w-full">Trending</li>
        <li className="border-l hover:bg-gray-300  w-full">Featured</li>
        <li className="border-l hover:bg-gray-300  w-full">Favorite</li>
      </div>

      {/* data section  */}
      <div className="grid flex-1 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2">
        <>
          {data.map((d) => (
            <ProductCard
              d={d}
              key={() => Math.ceil(Math.random() * 6 + 1)}
            ></ProductCard>
          ))}
        </>
      </div>
    </div>
  );
};

export default AllProducts;
