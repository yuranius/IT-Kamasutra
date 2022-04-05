import Postview from './PostsView';
import './CreatePosts.scss'


let Posts = () => {
   return (
      <div className='posts'>
         <div className='posts__block'>
            <div className='posts__slider'>Slaider
               
            </div>
            <div className='posts__create-post'>

               <div className='create-post__button'>
                  <a href='/' className='create-post__link'>
                     <i className='icon'></i>Create Post
                  </a>
               </div>
               <div className='creaite-post__form'>
                  <figure className='creaite-post__ava'>
                     image ava in textarea
                  </figure>
                  <textarea name='message' className='creaite-post__area' cols='30' rows='10' placeholder='О чем ты думаешь?'>
                  </textarea>
               </div>
               <div className='creaite-post__footer'>
                  <a href='#video' className='creaite-post__video'>
                     <i className='icon-video'></i>
                     <span>Live Video</span>
                  </a>
                  <a href='#photo' className='creaite-post__photo'>
                     <i className='icon-photo'></i>
                     <span>Photo/Video</span>
                  </a>
                  <a href='#activity' className='creaite-post__activity'>
                     <i className='icon-activity'></i>
                     <span>Feeling/Activity</span>
                  </a>

                  {/* <div className={`ms-auto pointer ${menuClass}`} id='dropdownMenu4' data-bs-toggle='dropdown' aria-expanded='false' onClick={this.toggleOpen}><i className='ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss'></i></div> */}
                  {/* <div className={`dropdown-menu-test ${menuClass}`} aria-labelledby='dropdownMenu4'></div> */}
                        <div className='card-body p-0 d-flex'>
                            <i className='feather-bookmark text-grey-500 me-3 font-lg'></i>
                            <h4 className='fw-600 text-grey-900 font-xssss mt-0 me-4 pointer'>Save Link <span className='d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500'>Add this to your saved items</span></h4>
                        </div>
                        <div className='card-body p-0 d-flex mt-2'>
                            <i className='feather-alert-circle text-grey-500 me-3 font-lg'></i>
                            <h4 className='fw-600 text-grey-900 font-xssss mt-0 me-4 pointer'>Hide Post <span className='d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500'>Save to your saved items</span></h4>
                        </div>
                        <div className='card-body p-0 d-flex mt-2'>
                            <i className='feather-alert-octagon text-grey-500 me-3 font-lg'></i>
                            <h4 className='fw-600 text-grey-900 font-xssss mt-0 me-4 pointer'>Hide all from Group <span className='d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500'>Save to your saved items</span></h4>
                        </div>
                        <div className='card-body p-0 d-flex mt-2'>
                            <i className='feather-lock text-grey-500 me-3 font-lg'></i>
                            <h4 className='fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4 pointer'>Unfollow Group <span className='d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500'>Save to your saved items</span></h4>
                        </div>


               </div>
            </div>

            <Postview />


         </div>
      </div>
   );
};

export default Posts;

