import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, subtitle, storyline, imagePath } } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ imagePath } alt="Movie Cover" className="movie-card-cover" />
        <div className="movie-card-body">
          <h2 className="movie-title">{ title }</h2>
          <h4 className="movie-subtitle">{ subtitle }</h4>
          <h5 className="movie-storyline">{ storyline }</h5>
        </div>
        <div className="movie-rating">
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
