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

  const checkVisibility = () => {
    const totalAlbums = albums.length;
    const slidesPerView = swiperRef.current.swiper.params.slidesPerView;
    const currentIndex = swiperRef.current.swiper.activeIndex;

    // Check if the first two albums are not visible
    return currentIndex >= totalAlbums - slidesPerView + 2; // +2 to check for the first two albums
  };

  const handleNextWithCheck = () => {
    handleNext();
    if (checkVisibility()) {
      console.log('First two albums are not visible');
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.arrows}>
        <LeftArrow onClick={handlePrev} />
        <RightArrow onClick={handleNextWithCheck} /> {/* Use the new function */}
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={1} // Default view
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4, // Adjusted to 4 for better responsiveness
          },
          1024: {
            slidesPerView: 7, // Show 7 cards on larger screens
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


