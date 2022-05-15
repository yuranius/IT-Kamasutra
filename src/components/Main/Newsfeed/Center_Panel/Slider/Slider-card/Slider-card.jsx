import scss from "./Slider-card.module.scss";

let SliderCard = (props) => {
   return (
      <div className={scss.slider}>
         <div className={scss.slider__card}>
            <div className={scss.slider__bg} style={{backgroundImage: `${props.background}`,}}>
               <div className={scss.slider__cardbody}>
                  <figure className={scss.slider__avatar}>
                     <img src={props.avatar} alt='avater'/>
                  </figure>
                  <h4 className={scss.slider__title}>{`${props.name} ${props.sername}`}</h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SliderCard;
