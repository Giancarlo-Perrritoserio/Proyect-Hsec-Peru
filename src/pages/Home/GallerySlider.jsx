import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

import image1 from "../../assets/images/image1hsec.png";
import image2 from "../../assets/images/image2hsec.png";
import image3 from "../../assets/images/image3hsec.png";

const GallerySlider = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="Imagen 1" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Imagen 2" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Imagen 3" className="w-full h-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GallerySlider;
