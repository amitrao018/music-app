import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import AlbumCard from './Card'; // Ensure you import your AlbumCard component
import LeftArrow from './LeftArrow'; // Import LeftArrow component
import RightArrow from './RightArrow'; // Import RightArrow component

function Carousel({ albums }) {
  const swiperRef = useRef(null); // Create a ref for Swiper instance

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev(); // Use Swiper instance to go to the previous slide
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext(); // Use Swiper instance to go to the next slide
  };

  return (
    <div style={{ position: 'relative' }}> {/* Relative positioning for arrows */}
      <Swiper
        ref={swiperRef} // Attach ref to Swiper
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
      <LeftArrow onClick={handlePrev} />
      <RightArrow onClick={handleNext} />
    </div>
  );
}

export default Carousel;


