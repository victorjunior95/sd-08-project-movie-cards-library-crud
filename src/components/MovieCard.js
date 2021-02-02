import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          <img alt="imagem do filme" src={ imagePath } />
        </div>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{storyline}</p>
        </div>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
