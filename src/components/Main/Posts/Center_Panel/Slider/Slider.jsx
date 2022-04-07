import "./Slider.scss";

let Slider = () => {
   return (
      <div className='slider'>
         <div className='slider__card'>
            <div className='slider__card-body'>
               <span className='slider__button'>
                  <a href='/'>
                     <i className='icon-add_photo_alternatetest'></i>
                  </a>
               </span>
               <h4 className='slider__title'>Add Story </h4>

            </div>
         </div>

         <div className='slider__card'>
            <div className='slider__bg'style={{backgroundImage: `url("http://sociala.uitheme.net/assets/images/s-1.jpg")`,}}>
               <div className='slider__card-body'>
                  <figure className='slider__avatar'>
                     <img src={`http://sociala.uitheme.net/assets/images/user-11.png`} alt='avater' className='slider__image'/>
                  </figure>
                  <h4 className='slider__title'>Medvedeva  </h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Slider;
