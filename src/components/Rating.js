import React from 'react';
import PropTypes from 'prop-types';

import './Rating.css';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return <span className="rating">{rating}</span>;
  }
}

Rating.propTypes = { rating: PropTypes.oneOfType([
  PropTypes.number.isRequired,
  PropTypes.string.isRequired,
]) };

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
