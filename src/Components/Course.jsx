import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const Course = ({ image, title, description, rating, mentor, time, video, id }) => {
  const isDecimal = (number) => {
    return number % 1 !== 0;
  };

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = isDecimal(rating);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }

    return stars;
  };
  return (
    <>
      <div className="w-[90%] md:w-[70vw] flex flex-row gap-2 justify-around items-center">
        {id % 2 !== 0 ? (
          <>
            <img src={`${image}`} alt="" className="w-[35%] h-full" />
            <div className="flex flex-col border-l-2 border-l-slate-50 text-slate-50 pl-6 gap-y-3 w-[30vw]">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-lg font-normal">{description}</p>
              <div className="flex flex-col ">
                <p className="text-lg font-normal"> {mentor}</p>
                <p className="text-lg flex flex-row gap-3 font-normal  items-center">
                  {rating} {renderStars()}
                </p>
                <p className="font-normal text-lg">
                  {time} Hours - {video} Videos
                </p>
              </div>
              <div className="">
                <button>
                  <Link to="/service/hardskill/careerpath2" className="border border-white font-semibold text-white py-2 px-4 rounded block hover:text-gold w-25">
                    See Class
                  </Link>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col border-r-2 border-r-slate-50 text-slate-50 pl-6 gap-y-3 w-[30vw]">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-xl">{description}</p>
              <div className="flex flex-col ">
                <p>{mentor}</p>
                <p className="text-xl flex flex-row gap-3  items-center">
                  {rating} {renderStars()}
                </p>
                <p>
                  {time} Hours - {video} Videos
                </p>
              </div>
              <div className="">
                <button>
                  <Link to="/service/hardskill/careerpath2" className="border border-white font-semibold text-white py-2 px-4 rounded block hover:text-gold w-25">
                    See Class
                  </Link>
                </button>
              </div>
            </div>
            <img src={`${image}`} alt="" className="w-[35%] h-full" />
          </>
        )}
      </div>
    </>
  );
};
Course.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  mentor: PropTypes.string,
  time: PropTypes.string,
  video: PropTypes.number,
  id: PropTypes.number,
};
