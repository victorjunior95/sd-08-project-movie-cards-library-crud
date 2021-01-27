import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../App.css';

// import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, /* subtitle, */ storyline, /* rating, */ imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          {/* <h5 className="movie-card-subtitle">{subtitle}</h5> */}
          <p className="movie-card-storyline">{storyline}</p>
          <Link to={ `/movies/${id}` } className="link-details">VER DETALHES</Link>
        </div>
        {/* <Rating rating={ rating } /> */}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
