import React, { useRef } from "react";
import "./Testimonial.css";
import { testimonialData } from "./TestimonialsData.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import { ArrowRight, ArrowLeft, Star } from "@phosphor-icons/react";
import PreTitle from "../../../components/PreTitle/PreTitle.jsx";
import BackgroundShapesRight from "../../../components/BackgroundShapes/BackgroundShapesRight";

const Testimonials = () => {
  const swiperRef = useRef(null);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={`star-icon ${i <= rating ? "filled" : "empty"}`}
          fill={i <= rating ? "#ffd700" : "none"}
          color={i <= rating ? "#ffd700" : "#d1d5db"}
        />
      );
    }
    return stars;
  };

  return (
    <section className="home_testimonial_section section">
      {/* <BackgroundShapesRight /> */}

      <div className="home_testimonial_container container">
        <div className="home_testimonial_contents">
          <div className="home_testimonial_headers">
            <PreTitle preTitle={"Testimonials"} />
            <h2 className="home_testimonial_title shared_header_title">
              Reviews that speak volumes
            </h2>
          </div>
          <p className="home_testimonial_desc shared_header_desc">
            Hear from others how our technology solutions have saved buyers
            money and farmers are now enjoying really nice rates because we cut
            of middlemen
          </p>
        </div>

        <div
          className="home_testimonial_swiper_wrapper"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Swiper
            modules={[A11y, Autoplay, Keyboard]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            keyboard={{ enabled: true }}
            a11y={{ enabled: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
            className="home_testimonial_swiper"
          >
            {testimonialData.map((t, index) => {
              const isEven = index % 2 === 0;
              return (
                <SwiperSlide key={t.id} className="home_testimonial_slide">
                  <div
                    className={`home_testimonial_card ${
                      isEven ? "even" : "odd"
                    }`}
                  >
                    {/* Content Wrapper */}
                    <div className="home_testimonial_content_wrapper">
                      {/* Image Section */}
                      <div className="home_testimonial_image_container">
                        <img
                          src={t.image}
                          alt={t.personName}
                          loading="lazy"
                          className="home_testimonial_img"
                        />
                        <div className="home_testimonial_overlay">
                          <h3 className="home_testimonial_person_name">
                            {t.personName}
                          </h3>
                          <p className="home_testimonial_person_role">
                            {t.role}
                          </p>
                          <span className="home_testimonial_person_location">
                            {t.location}
                          </span>
                        </div>
                      </div>

                      {/* Text Section */}
                      <div className="home_testimonial_text_container">
                        <div className="home_testimonial_rating">
                          {renderStars(t.rating)}
                        </div>
                        <p className="home_testimonial_quote">
                          "{t.testimony}"
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="home_testimonial_nav">
            <button
              aria-label="Previous testimonials"
              className="home_testimonial_nav_btn prev"
              onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              aria-label="Next testimonials"
              className="home_testimonial_nav_btn next"
              onClick={() => swiperRef.current && swiperRef.current.slideNext()}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
