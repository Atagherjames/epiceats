// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function SlideShow() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/slide1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
