// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../styles/styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
const Trendings = () => {
  const data = [1, 2, 4];
  return (
    <div className="p-4">
      <h1 className="text-2xl py-3"> Trendings</h1>
      <Swiper
        slidesPerView={1.5}
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
            <SwiperSlide key={d.value}>
              <img src="./banner_shoe.jpg" alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Trendings;
