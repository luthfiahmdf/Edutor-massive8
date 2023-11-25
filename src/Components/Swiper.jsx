import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from 'flowbite-react'; // Assuming Card component from flowbite

const CardSlider = ({ cardData }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
        <div key={index} className="grid grid-cols-2 gap-4 border border-white items-center mb-4">
        <div>
          <a href={card.link}>
            <img src="/public/image/ment6.jpg" alt="Team Member 6" className="rounded-full w-25 h-20 object-cover mb-4 ml-2 mt-10" />
          </a>
        </div>
        <div className="text-white ml-4 mt-4">
          <h3 className="text-xl font-bold">Jesslyn Leon{card.name}</h3>
          <p className="text-sm">Mobile Developer{card.position}</p>
          <br />
          <p className="text-sm">Certified Mobile Dev{card.certification}</p>
          <span className="text-white">{card.rating}4,5 &#9733; &#9733; &#9733; &#9733; &#9734; (150)</span>
          <p className="text-sm">{card.videoCount}10+ Online Video</p>
          <br />
          <a href="#" className="inline-block border border-white font-semibold text-white py-1 px-6 rounded block hover:text-gold w-auto">
            Profile
          </a>
        </div>
      </div>
      
      
    ))}
  </Slider>
);
};

export default CardSlider;
