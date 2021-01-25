import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, storyline, subtitle, rating, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{storyline}</p>
        <div>
          <Link to={ `./movies/${id}` }>VER DETALHES</Link>
          <p>{rating}</p>
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,

  }).isRequired,
};

export default MovieCard;
