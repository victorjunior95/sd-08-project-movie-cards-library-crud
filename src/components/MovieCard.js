import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { id, title, storyline, subtitle, rating, imagePath },
    } = this.props;
    // esse trecho ( linhas 6,7,8 ) foi retirado da pagina https://github.com/tryber/sd-07-project-movie-card-library-crud/pull/144/files
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h3>{storyline}</h3>
        <h4>{rating}</h4>
        <p>
          <Link to={ `movies/${id}` }>VER DETALHES</Link>
        </p>
      </div>
    );
  }
}
export default MovieCard;
