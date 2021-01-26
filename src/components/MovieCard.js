import React from 'react';
import PropTypes from 'prop-types';

import '../css/MovieCard.css';

class MovieCard extends React.Component {
  movieCarImg(imagePath, title) {
    return (
      <div className="movie-car-img">
        <img className="movie-img" src={ imagePath } alt={ title } />
      </div>
    );
  }

  movieCarInfo(title, subtitle, genre) {
    const firstLetter = genre[0].toUpperCase();
    const genreUpper = genre.replace(genre[0], firstLetter);
    return (
      <div className="movie-car-info">
        <span className="movie-car-title">{title}</span>
        <span className="movie-car-subtitle">{subtitle}</span>
        <span className="movie-car-genre">{genreUpper}</span>
      </div>
    );
  }

  movieCarStoryline(storyline) {
    return (
      <div className="movie-car-storyline">
        <p>{storyline}</p>
      </div>
    );
  }

  movieCarRatingBookmarked(rating, bookmarked) {
    return (
      <div className="movie-car-rating-bookmarked">
        <span>{rating}</span>
        <span>{bookmarked ? 'Favorito' : ''}</span>
      </div>
    );
  }

  render() {
    const {
      movie: { title, subtitle, storyline, rating, imagePath, bookmarked, genre },
    } = this.props;
    return (
      <div className="movie-card-content" data-testid="movie-card">
        {this.movieCarImg(imagePath, title)}
        {this.movieCarInfo(title, subtitle, genre)}
        {this.movieCarStoryline(storyline)}
        {this.movieCarRatingBookmarked(rating, bookmarked)}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
