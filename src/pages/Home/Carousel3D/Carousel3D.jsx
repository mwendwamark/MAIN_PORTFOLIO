import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Carousel3D.css";

// Import images from assets
import Img1 from "../../../assets/KejaConnect.webp";
import Img2 from "../../../assets/KilimoLink.webp";
import Img3 from "../../../assets/LiquorChapChap.webp";
import Img4 from "../../../assets/GRWC.webp";

const Carousel3D = () => {
  // Image data array
  const images = [
    { id: 1, src: Img1, alt: "Keja Connect Project", title: "Keja Connect" },
    { id: 2, src: Img2, alt: "Kilimo Link Project", title: "Kilimo Link" },
    {
      id: 3,
      src: Img3,
      alt: "Liquor Chapchap Project",
      title: "Liquor Chapchap",
    },
    { id: 4, src: Img4, alt: "GRW Church Project", title: "GRW Church" },
    { id: 5, src: Img1, alt: "Keja Connect Project", title: "Keja Connect" },
    { id: 6, src: Img2, alt: "Kilimo Link Project", title: "Kilimo Link" },
    {
      id: 7,
      src: Img3,
      alt: "Liquor Chapchap Project",
      title: "Liquor Chapchap",
    },
    { id: 8, src: Img4, alt: "GRW Church Project", title: "GRW Church" },
  ];

  return (
    <div className="carousel3d_section section">
      <div className="carousel3d_container">
        {/* Hero Text Section */}
        <div className="carousel3d_hero">
          <h1 className="carousel3d_hero_title">
            Design <span className="carousel3d_hero_accent">Beyond</span> Self
          </h1>
          <p className="carousel3d_hero_subtitle">
            Swipe or drag to explore the collection
          </p>
        </div>

        {/* 3D Coverflow Carousel */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="carousel3d_swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className="carousel3d_slide">
              <div className="carousel3d_card">
                <img src={image.src} alt={image.alt} draggable="false" />
                <div className="carousel3d_card_overlay">
                  <h3 className="carousel3d_card_title">{image.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel3D;
