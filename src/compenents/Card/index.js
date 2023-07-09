import './card.scss'
import PropTypes from 'prop-types';

const Card = ({ title, cover,}) => {
  return (
    <div className="card">
      <img src={cover} alt={title}  />
      <h3 className="card__title">{title}</h3>
      
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  
};

export default Card;