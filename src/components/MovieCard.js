import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props.movie };
  }

  render() {
    const { id, title, subtitle, storyline, imagePath } = this.state;
    const movieId = `movies/${id}`;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="Movie Cover" />
        <h1>{ title }</h1>
        <h4>{ subtitle }</h4>
        <p>{ storyline }</p>
        <Link to={ movieId }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
