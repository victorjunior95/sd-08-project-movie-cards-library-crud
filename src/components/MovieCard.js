import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // const { movie: { title, storyline, id } } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        Movie Card
        <p>{ title }</p>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
