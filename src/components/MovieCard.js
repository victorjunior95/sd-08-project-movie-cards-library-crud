import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, thumbnail, id } = this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <h3>{ title }</h3>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <img src={ thumbnail } alt= { title } />
        <Link to={ `/movies/${ id }` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {   
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
}


export default MovieCard;
