import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieDetailsCard extends React.Component {
  render() {
    const { title, subtitle, imagePath,
      storyline, genre, rating,
      id, onClick } = this.props;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <button type="button" onClick={ onClick }>
          <Link to="/">DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetailsCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieDetailsCard;
