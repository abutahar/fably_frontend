/* eslint-disable react/prop-types */
const ProductCard = (d) => {
  return (
    <div
      key={d.value}
      className="group relative hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className=" hover:shadow  items-center justify-between">
        <div className="relative group ">
          <img
            src="./banner_shoe.jpg"
            alt=""
            className="transition-all duration-200  "
          />
        </div>
        <div className=" items-center justify-center">
          <div className="">
            <h1 className="font-semibold text-xl">{d.text || "abcd"}</h1>
            <h2>{d.title || "abcde"}</h2>
          </div>
          <p>${d.price || "0"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
