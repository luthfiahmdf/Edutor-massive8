import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const CardSlider = ({ cardData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cardData.map((card, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-white mb-4 rounded-md dark:bg-gray-800">
          <div className="flex flex-col items-center">
            <a href={card.link}>
              <img src="/public/image/ment6.jpg" alt={`Profile of ${card.name}`} className="rounded-full w-35 h-20 object-cover mb-4 mt-4" />
            </a>
            <h3 className="text-xl font-bold">Jesslyn Leon{card.name}</h3>
            <p className="text-sm">Mobile Developer{card.position}</p>
            <p className="text-sm">Certified Mobile Dev{card.certification}</p>
            <span className="text-white">{card.rating}4.5 &#9733; &#9733; &#9733; &#9733; &#9734; (150)</span>
            <p className="text-sm">{card.videoCount}10+ Online Video</p>
            <Link to="/services/hardskill/detailMentor" className="mb-4  inline-block border border-white  text-white py-1 px-6 rounded mt-2 hover:text-black hover:bg-gold">
              Profile
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

CardSlider.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
      position: PropTypes.string,
      certification: PropTypes.string,
      rating: PropTypes.number,
      videoCount: PropTypes.number,
    })
  ).isRequired,
};

export default CardSlider;
