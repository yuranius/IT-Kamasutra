import scss from "./Slider-card-one.module.scss";

let SliderCardOne = () => {
   return (
   <div className={scss.slider}>
      <div className={scss.slider__card}>
         <div className={scss.slider__cardbody}>
            <span className={scss.slider__button}>
               <a href='/'>
                  <i className='icon-add_photo_alternatetest'></i>
               </a>
            </span>
            <h4 className={scss.slider__title}>Add Story </h4>

         </div>
      </div>
   </div>
   );
};

export default SliderCardOne;
