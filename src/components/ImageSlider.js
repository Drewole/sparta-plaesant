import Slider from "react-slick";

//Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ slides }) => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div className="slide" key={index}>
                    <img src={slide.image} alt={slide.alt} />
                </div>
            ))}
        </Slider>
    )
}

export default ImageSlider
