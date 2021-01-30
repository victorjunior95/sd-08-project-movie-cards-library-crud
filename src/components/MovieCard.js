import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id } } = this.props;
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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    // subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    // rating: ropTypes.number.isRequired,
    // imagePath: PropTypes.string.isRequired,
    // bookmarked: PropTypes.bool.isRequired,
    // genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
