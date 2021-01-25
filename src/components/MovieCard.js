import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import PropsTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {id, title, storyline, imagePath } = this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Link to={ `/movies/${id}` }>VER DETALHES </Link>
      </div>
    );
  }
}

MovieCard.PropsTypes = {
  movie: PropsTypes.shape({
    id: PropsTypes.number.isRequired,
    title: PropsTypes.string.isRequired,
    storyline: PropsTypes.string.isRequired,
    imagePath: PropsTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
