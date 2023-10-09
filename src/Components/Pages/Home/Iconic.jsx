import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../styles/styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";

const Iconic = () => {
  const data = [1, 2, 4];
  const viewport = window.visualViewport.width;
  return (
    <div className=" ml-4">
      <h1 className="text-2xl mb-6  font-semibold">Always Iconic</h1>
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
                <div className="text-xl mt-2">{d.heading || "heading"}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Iconic;
