import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="CardContainer">
        <div className="Cardunique">
          <h2>{movie.title}</h2>
          <p>{movie.storyline}</p>
          <Link to={ `/movies/${movie.id}` }> VER DETALHES </Link>
        </div>

      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.node).isRequired,
};

export default MovieCard;
