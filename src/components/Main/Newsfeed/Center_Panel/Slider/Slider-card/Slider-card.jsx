import scss from "./Slider-card.module.scss";

let SliderCard = () => {
   return (
      <div className={scss.slider}>
         <div className={scss.slider__card}>
            <div className={scss.slider__bg} style={{backgroundImage: `url("http://sociala.uitheme.net/assets/images/s-1.jpg")`,}}>
               <div className={scss.slider__cardbody}>
                  <figure className={scss.slider__avatar}>
                     <img src={`http://sociala.uitheme.net/assets/images/user-11.png`} alt='avater'/>
                  </figure>
                  <h4 className={scss.slider__title}>Name Sername  </h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SliderCard;
