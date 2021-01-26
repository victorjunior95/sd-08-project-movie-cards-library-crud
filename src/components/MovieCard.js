import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    const { id, title, storyline, imagePath } = movies;
    return (
      <>
        <div data-testid="movie-card">
          Movie Card
        </div>
        <img src={ imagePath } alt="Movie Screen" />
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
