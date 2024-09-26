import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import AlbumCard from './Card'; // Ensure you import your AlbumCard component
import LeftArrow from './LeftArrow'; // Import your LeftArrow component
import RightArrow from './RightArrow'; // Import your RightArrow component
import styles from './Carousel.module.css'; // Optional CSS Module for styles

function Carousel({ albums }) {
  const swiperRef = useRef(null); // Create a ref for Swiper instance

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev(); // Go to previous slide
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext(); // Go to next slide
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.arrows}>
        <LeftArrow onClick={handlePrev} />
        <RightArrow onClick={handleNext} />
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {albums.map((album) => (
          <SwiperSlide key={album.id}>
            <AlbumCard album={album} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
