import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <Router>
        <div data-testid="movie-card">
          <p>{ movie.title }</p>
          <p>{ movie.storyline }</p>
          <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
        </div>
      </Router>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
