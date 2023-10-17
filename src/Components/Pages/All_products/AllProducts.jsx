import ProductCard from "../Common/Shared/ProductCard";

const AllProducts = () => {
  return (
    <div className="">
      <div className="sticky border border-t-0 top-[50px] list-none  flex z-20 justify-evenly bg-gray-200 text-center">
        <li className="border-l hover:bg-gray-300 w-full">Filter</li>
        <li className="border-l hover:bg-gray-300  w-full">Sort</li>
        <li className="border-l hover:bg-gray-300 w-full">Find</li>
        <li className="border-l hover:bg-gray-300 w-full">blank</li>
      </div>
      {/* data section  */}
      <div className="grid flex-1 relative">
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default AllProducts;
