import PropTypes from 'prop-types';

const Card = ({ imageUrl, linkHref, title }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-200 dark:border-gray-700 overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <a href={linkHref} target="_blank" rel="noopener noreferrer">
        <img className="rounded-t-lg" src={imageUrl} alt="" />
      </a>
      <div className="p-5">
        <a href={linkHref} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{title}</h5>
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
