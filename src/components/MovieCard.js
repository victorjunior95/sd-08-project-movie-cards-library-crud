import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const findID = `movies/${this.props.movie.id}`
    return (
      <div data-testid="movie-card">
        <h1>Título: { this.props.movie.title }</h1>
        <p>{ this.props.movie.storyline }</p>
        <Link to={findID}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
