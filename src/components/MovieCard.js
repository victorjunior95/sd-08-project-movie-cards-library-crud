import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">

        <img src={ movie.imagePath } className="movie-card-image" alt={ movie.title } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{movie.title}</h4>
          <p className="movie-card-storyline">{movie.storyline}</p>
        </div>
        <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
