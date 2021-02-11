import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} alt={movie.title} />
        <h2>{movie.title}</h2>
        <h3>{movie.subtitle}</h3>
        <p>{movie.storyline}</p>
        <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
      </div>
    );
  }
}


export default MovieCard;
