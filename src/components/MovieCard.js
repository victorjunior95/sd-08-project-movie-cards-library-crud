import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card" data-testid="movie-card">
        <h4 className="movie-card-header">{movie.title}</h4>
        <p className="movie-card-sotyline">{movie.storyline}</p>
        <Link className="movie-card-link" to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
