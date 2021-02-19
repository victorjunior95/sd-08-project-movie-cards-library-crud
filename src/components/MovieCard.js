import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline } = this.props.movie;
    const findID = `movies/${id}`;

    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <Link to={ findID } >VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
