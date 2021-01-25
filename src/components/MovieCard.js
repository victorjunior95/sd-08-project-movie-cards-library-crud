import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card">
        <img src={ movie.imagePath } alt={ movie.title } />
        <p>{movie.title}</p>
        <p>{ movie.storyline }</p>
        <div>
          <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
// o título, a sinopse e um link com o texto "VER DETALHES"
//   id: 1,
// title: 'Kingsglaive',
// subtitle: 'Final Fantasy XV',
// storyline: "King Regis, who oversees the land of Lucis"
// rating: 4.5,
// imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
// bookmarked: true,
// genre: 'action',
