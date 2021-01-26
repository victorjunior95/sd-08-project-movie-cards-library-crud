import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h3>{movie.title}</h3>
        <p>{movie.storyline}</p>
        <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
    id: PropTypes.number,
    imagePath: PropTypes.string,
    rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    storyline: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
