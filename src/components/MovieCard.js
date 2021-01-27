import React from 'react';
import PropTypes from 'prop-types';

import '../css/MovieCard.css';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  movieCardImg(imagePath, title) {
    return (
      <div className="movie-card-img">
        <img className="movie-img" src={ imagePath } alt={ title } />
      </div>
    );
  }

  movieCardInfo(title, genre) {
    const firstLetter = genre[0].toUpperCase();
    const genreUpper = genre.replace(genre[0], firstLetter);
    return (
      <div className="movie-card-info">
        <span className="movie-card-title">{title}</span>
        <span className="movie-card-genre">{genreUpper}</span>
      </div>
    );
  }

  movieCardStoryline(storyline) {
    return (
      <div className="movie-card-storyline">
        <p>{storyline}</p>
      </div>
    );
  }

  movieCardButton(id, name) {
    return (
      <div className="movie-card-button-container">
        <Link
          className={ `movie-card-link-${name}` }
          to={ `/movies/${id}` }
        >
          VER DETALHES
        </Link>
      </div>
    );
  }

  render() {
    const {
      movie: { id, title, storyline, imagePath, genre },
    } = this.props;
    return (
      <div className="movie-card-content" data-testid="movie-card">
        {this.movieCardImg(imagePath, title)}
        {this.movieCardInfo(title, genre)}
        {this.movieCardStoryline(storyline)}
        {this.movieCardButton(id, 'details')}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
