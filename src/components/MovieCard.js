import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Coroa from './img/SPF.jpg';
import CoroaLin from '../test.jpg';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, rating, imagePath, bookmarked, id } = movie;
    return (
      <div className="movie-card movie-card-top" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        {bookmarked
          ? <img src={ Coroa } alt="Coroa" className="bookmarked" title="Bookmarked" />
          : <img src={ CoroaLin } alt="Coroa" className="bookmarked" />}
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Link to={ `/movies/${id}` } className="details">VER DETALHES</Link>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
    bookmarked: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
