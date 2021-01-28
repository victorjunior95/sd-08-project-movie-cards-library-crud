import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/movieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { title,
      subtitle, imagePath, storyline, id } } = this.props;

    return (
      <div
        data-testid="movie-card"
        className="movie-card"
      >
        <img alt={ title } src={ imagePath } className="movie-card-image" />
        <section className="movie-card-body">
          <h3 className="movie-title">{title}</h3>
          <h4 className="movie-subtitle">{subtitle}</h4>
          <p className="movie-storyline">{storyline}</p>
          <Link to={ `movies/${id}` } className="movie-details">VER DETALHES</Link>
        </section>
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
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};
export default MovieCard;
