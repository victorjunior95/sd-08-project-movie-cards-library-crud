import React from 'react';
import PropTypes from 'prop-types';
import Estrela from './img-components/001-estrela.svg';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <img src={ Estrela } alt="Estrela" className="star" />
        <div className="rating">{rating}</div>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
