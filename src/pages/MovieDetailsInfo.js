import React from 'react';
import PropTypes from 'prop-types';

export default class MovieDetailsInfo extends React.Component {
  render() {
    const { movie, verifyImagePath } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const path = imagePath;

    return (
      <div className="detail-info-container">
        <h2>{ title }</h2>
        <div className="detail-img">
          <img alt="Movie Cover" src={ verifyImagePath(path) } />
        </div>
        <div className="detail-paragraph">
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
      </div>
    );
  }
}

MovieDetailsInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
  verifyImagePath: PropTypes.func.isRequired,
};
