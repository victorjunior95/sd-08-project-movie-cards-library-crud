import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    const { id, title, storyline, imagePath } = movies;
    return (
      <div data-testid="movie-card">
        <img alt="movie" src={ imagePath }/>
        <div>
          <h4 data-testid="movie-title"> { title } </h4>
          <p>{ storyline }</p>
        </div>
        <Link to={ `/movies/${id}` }>Ver Detalhes</Link>
      </div>
    );
  }
}

export default MovieCard;
