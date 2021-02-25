import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { id, title, subtitle, storyline, rating, imagePath } = movie;
  return (
    <div data-testid="movie-card">
      <img src={ imagePath } alt="Movie Cover" />
      <div>
        <h2>{ title }</h2>
        <h4>{ subtitle }</h4>
        <p>{ storyline }</p>
        <b>IMDb: </b>
        { rating }
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
