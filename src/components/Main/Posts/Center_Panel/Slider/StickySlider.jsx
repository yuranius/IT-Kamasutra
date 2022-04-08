import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css';

import Slide from './Slide'

import data from './data';

const StickySlider = () => {
  const params = {
    slidesPerView: 1,
    spaceBetween:50,
    onSlideChange: () => console.log('slide change'),
    onSwiper:(swiper) => console.log('gj')
  };

  return (
    <Swiper {...params}>
      {data.map((item, idx) => (
        <div key={idx}>
          {/* добавляем слайд */}
          <Slide color={item.color}>
            {item.title}
          </Slide>
        </div>
      ))}
    </Swiper>
  );
};

export default StickySlider;