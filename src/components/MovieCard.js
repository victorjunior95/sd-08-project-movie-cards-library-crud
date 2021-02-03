import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <>
        <div data-testid="movie-card">
          <img alt={ title } src={ imagePath } />
          <h3>{title}</h3>
          <p>{storyline}</p>
        </div>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </>
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
