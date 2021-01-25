import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img className="movie-card-image " src={ imagePath } alt={ title } />
        <div className="movie-card-body">
          <h2 className="movie-card-title ">{title}</h2>
          <h3 className="movie-card-subtitle ">{subtitle}</h3>
          <p className="movie-card-storyline ">{storyline}</p>
          <div className="movie-card-rating">
            <span className="rating">{`Rating :${rating}`}</span>
          </div>
        </div>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
