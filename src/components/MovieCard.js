import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;
    return (
      <div className="movie-card" data-testid="movie-card">
        <section
          className="movie-card-image"
          style={ { backgroundImage: `url(${imagePath})` } }
        >
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
        </section>
        <div className="movie-card-body">
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <section className="movie-card-learn-more">
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </section>
      </div>
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
