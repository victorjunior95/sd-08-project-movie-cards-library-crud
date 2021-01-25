import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <p>{ movie.title }</p>
        <p>{ movie.storyline }</p>
        <BrowserRouter>
          <Link to={ `/movies/${movie.id}` } params={ movie.id }>VER DETALHES</Link>
        </BrowserRouter>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
