import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const kicksoft = "/images/kicksat.jpg";
const lums = "/images/lums.jpg";
const smart = "/images/smartprep.jpg";
const mapped = "/images/maped.jpg";
const dversity = "/images/dversity.jpg";
const taleemfinance = "/images/taleemfinance.jpg";
const stem = "/images/stem.jpg";
const pny = "/images/pny.jpg";
const bia = "/images/bia.png";
const rs = "/images/rs.png";

function Gallery() {
    const partnerImages = [kicksoft, lums, smart, mapped, dversity, pny, taleemfinance, stem, bia, rs];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768, // Adjust this value based on when you want the slider to change for smaller screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900, // Adjust this value based on when you want the slider to change for smaller screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1130, // Adjust this value based on when you want the slider to change for smaller screens
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Adjust this value based on when you want the slider to change for even smaller screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {partnerImages.map((el, index) => (
                <div key={index}>
                    <img src={el} alt={`Img ${index}`} width={200} height={'auto'} />
                </div>
            ))}
        </Slider>
    );
}

export default Gallery;
