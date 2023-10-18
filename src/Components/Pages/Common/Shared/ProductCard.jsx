/* eslint-disable react/prop-types */
const ProductCard = (d) => {
  return (
    <div className=" shadow-sm p-2 items-center justify-between hover:shadow-md border">
      <div className="relative group pb-3 border-b ">
        <img
          src={d.img || "./banner_shoe.jpg"}
          alt=""
          className="transition-all  object-cover h-60 rounded w-full object-center sm:max-h-screen bg-cover duration-200  "
        />
      </div>
      <div className="flex justify-between  gap-5">
        <div className="flex flex-col justify-between">
          <h1 className=" font-semibold text-xl">{d.text || "abcd"}</h1>
          <h2 className="">####</h2>
        </div>
        <div className="mt-auto">
          <p>price ${d.price || "0"}</p>
        </div>
        <div className=" border-l pl-2 ">
          <h3 className="px-4 py-1">stock: {d.q || 0}</h3>
          <button className="border active:bg-gray-300 hover:bg-gray-200  px-4 py-1 rounded">
            add cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
