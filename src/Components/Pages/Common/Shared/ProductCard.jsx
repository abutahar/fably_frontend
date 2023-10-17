/* eslint-disable react/prop-types */
const ProductCard = (d) => {
  return (
    <div
      key={d.value}
      className="group relative hover:-translate-y-1 transition-all duration-200"
    >
      <img src="./banner_shoe.jpg" alt="" className="group" />
      <div className="absolute group-hover:bg-opacity-50 group-hover:rounded transition-all duration-200  bottom-0 bg-black bg-opacity-30 flex flex-col w-full gap-2">
        <h3 className="text-white pl-4 text-xl ">
          {d.title || "Fably styles"}
        </h3>
        <h1 className="pl-4 text-white md:text-3xl text-2xl ">
          {d.disc || "fixed description adflklf lsafj"}
        </h1>
        <button className="mt-4 ml-4  mb-6   px-6 w-fit rounded-full text-white  py-1.5 bg-black   hover:ring-1 hover:text-black hover:bg-white ring-black font-semibold text-lg ">
          Shop
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
