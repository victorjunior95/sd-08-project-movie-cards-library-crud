import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props.movie };
  }

  render() {
    const { id, title, storyline, imagePath } = this.state;
    const findID = `movies/${id}`;

    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={ findID }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
