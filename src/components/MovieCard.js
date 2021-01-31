import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card" data-testid="movie-card">
        <h3>{movie.title}</h3>
        <p>{movie.subtitle}</p>
        <p>{movie.storyline}</p>
        <p>{movie.rating}</p>
        <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
