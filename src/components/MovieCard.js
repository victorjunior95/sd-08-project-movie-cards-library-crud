import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const movie = this.props;
    const { id, title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <div className="movie-card-rating" data-testid="rating">
          <span className="rating">{ rating }</span>
          <Link to={ `/movies/:${id}` } className="detailsBtn">Ver Detalhes</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  storyline: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  imagePath: propTypes.string.isRequired,
};

export default MovieCard;
