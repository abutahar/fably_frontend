import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../styles/styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";

const FallStyles = () => {
  const data = [1, 2, 2, 2, 2, 2, 4];
  const viewport = window.visualViewport.width;
  return (
    <div className=" ml-4">
      <h1 className="text-2xl mb-6  font-semibold">New Fall Styles</h1>
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
              <div className=" hover:shadow  items-center justify-between">
                <div className="relative group ">
                  <img
                    src="./banner_shoe.jpg"
                    alt=""
                    className="transition-all duration-200  "
                  />
                </div>
                <div className=" border-b pb-2 items-center justify-center">
                  <div className="">
                    <h1 className="font-semibold text-xl">
                      {d.text || "abcd"}
                    </h1>
                    <h2>{d.title || "abcde"}</h2>
                  </div>
                  <p>${d.price || "0"}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FallStyles;
