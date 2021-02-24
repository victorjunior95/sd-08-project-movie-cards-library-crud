import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="image-container">
          <div className="movie-title-container">
            <p className="movie-title">{ title }</p>
          </div>
          <img className="movie-image" src={ imagePath } alt={ title } />
        </div>
        <p className="storyline">{ storyline }</p>
        <Link className="see-details" to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
