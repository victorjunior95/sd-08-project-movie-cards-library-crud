import React from 'react';
import PropTypes from 'prop-types';
import './movieCard.css';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // id: 1
    // imagePath: "images/Kingsglaive_Final_Fantasy_XV.jpg"
    // rating: 4.5
    // storyline: "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal."
    // subtitle: "Final Fantasy XV"
    // title: "Kingsglaive"
    return (
      <div className="card-container" data-testid="movie-card">
        <img className="card-img" src={ movie.imagePath } alt={ movie.title } />
        <p className="card-titulo">{movie.title}</p>
        <p>{ movie.storyline }</p>
        <div className="card-details">
          <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
