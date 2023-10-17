import ProductCard from "../Common/Shared/ProductCard";

const AllProducts = () => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 11];
  return (
    <div className="relative">
      <div className="sticky border border-t-0 top-[50px] md:top-20 list-none  flex z-40 justify-evenly bg-gray-200 text-center">
        <li className="border-l hover:bg-gray-300 w-full">Filter</li>
        <li className="border-l hover:bg-gray-300  w-full">Sort</li>
        <li className="border-l hover:bg-gray-300 w-full">Find</li>
        <li className="border-l hover:bg-gray-300 w-full">blank</li>
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
