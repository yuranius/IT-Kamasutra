
import Slider from "react-slick";


let Storyslider = (props) => {
    
    return (
        <Slider>
            <div className="new-card">
                <div className="new-card__body">
                    <span className="new-cardbutton"><a href="/"><i className="icon-free"></i></a></span>
                    <h4 className="new-card__title">Add Story</h4>
                </div>
            </div>
            <div>
                <div className="card" style={{backgroundImage: `url("http://sociala.uitheme.net/assets/images/s-1.jpg")`}}>
                    <div className="card__body" >
                        <figure className="card__avatar">
                            <img src={`http://sociala.uitheme.net/assets/images/user-11.png`} alt="avater" className="card__avaimg" />
                        </figure>
                        <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">Aliqa Macale</h4>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Storyslider;

// render() {
//     const storysettings = {
//         arrows: false,
//         dots: false,
//         infinite: false,
//         speed: 300,
//         slidesToShow: 1,
//         centerMode: false,
//         variableWidth: true
//     };
// };