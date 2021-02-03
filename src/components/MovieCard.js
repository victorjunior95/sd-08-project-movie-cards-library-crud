import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, storyline, title } = movie;
    const path = `/movies/${id}`;
    return (
      <section data-testid="movie-card">
        <h4>{ title }</h4>
        <p>{ storyline }</p>
        <Link to={ path }>VER DETALHES</Link>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
