// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../styles/styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
const Trendings = () => {
  const data = [1, 2, 4];
  const viewport = window.visualViewport.width;
  return (
    <div className="p-4">
      <h1 className="text-2xl py-3"> Trendings</h1>
      <Swiper
        slidesPerView={viewport < 500 ? 1.5 : 3}
        spaceBetween={10}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((d) => {
          return (
            <SwiperSlide key={d}>
              <div className="hover:shadow-xl border p-4 rounded-md items-center justify-between">
                <div className="relative group ">
                  <img
                    src="./banner_shoe.jpg"
                    alt=""
                    className="transition-all duration-200  group-hover:blur-sm"
                  />

                  <div className="absolute inset-0 md:inset-14 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded m-2 md:m5  ">
                    <h1 className=" text-3xl text-white align-middle font-semibold bottom-10 opacity-70 group-hover:opacity-100  md:m-5">
                      {d.feature || "gfdfdaf"}
                    </h1>
                  </div>
                </div>
                <div className=" items-center justify-between">
                  <div className="my-6 pl-2">
                    <h1 className="font-bold text-2xl">{d.text || "abcd"}</h1>
                    <h2>{d.title || "abcde"}</h2>
                  </div>
                  <button className="bg-black rounded-full  px-6 py-1 text-white hover:text-black hover:bg-white hover:ring-1 ring-black">
                    Buy now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Trendings;
