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
    slidesToShow: 3,
    slidesToScroll: 2,

  };

  let sliders = [
    {
      id:1,
      name: 'Valera',
      sername: 'Besstrashnyi',
      avatar: 'http://sociala.uitheme.net/assets/images/user-11.png',
      background: 'url("http://sociala.uitheme.net/assets/images/s-1.jpg")'
    },
    {
      id:2,
      name: 'Sasha',
      sername: 'Dobryi',
      avatar: 'http://sociala.uitheme.net/assets/images/user-12.png',
      background: 'url("http://sociala.uitheme.net/assets/images/s-2.jpg")'
    },
    {
      id:3,
      name: 'Vanya',
      sername: 'SHustryi',
      avatar: 'http://sociala.uitheme.net/assets/images/user-2.png',
      background: 'url("http://sociala.uitheme.net/assets/images/t-1.jpg")'
    },
    {
      id:4,
      name: 'Юрий',
      sername: 'Медведев',
      avatar: 'http://sociala.uitheme.net/assets/images/user-3.png',
      background: 'url("http://sociala.uitheme.net/assets/images/t-3.jpg")'
    }
  ]

  let slidersElements = sliders.map ( s => (

    <SliderCard  key={s.id} avatar={s.avatar} background={s.background} name={s.name} sername={s.sername} />

  ))

  return (
    <Slider {...settings} className={scss.wrapper}>
      <SliderCardOne />
      {slidersElements}
    </Slider>
  );
};




export default Slide;