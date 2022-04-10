import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import Slider from "react-slick";

import SliderCard from './Slider-card/Slider-card';
import SliderCardOne from './Slider-card-one/Slider-card-one';

import scss from './Slider.module.scss'



const Slide = () => {

  let settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 2,

  };

  return (
    <Slider {...settings} className={scss.wrapper}>
      <SliderCardOne />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
    </Slider>
  );
};




export default Slide;