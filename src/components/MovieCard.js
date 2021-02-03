import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;
    return (
      <div className="movie-card-container">
        <div className="movie-card" data-testid="movie-card">
          <div className="div-movie-card-image">
            <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
          </div>
          <div>
            <div className="movie-card-body">
              <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
              <h5 className="movie-card-subtitle">{subtitle}</h5>
              <p className="movie-card-storyline">{storyline}</p>
            </div>
          </div>
        </div>
        <div className="link-to-details-movie">
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
