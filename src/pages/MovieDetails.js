import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: undefined,
    };
    this.loader = this.loader.bind(this);
    this.movieDetails = this.movieDetails.bind(this);
    this.deleter = this.deleter.bind(this);
  }

  loader() {
    const { loading } = this.state;
    if (loading) {
      const { match: { params: { id } } } = this.props;
      movieAPI.getMovie(id)
        .then((movie) => {
          console.log(id);
          this.setState({ movie, loading: false });
        });
      return (<Loading />);
    }
  }

  deleter() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
  }

  movieDetails() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleter }>DELETAR</Link>
      </div>
    );
  }

  render() {
    return (this.loader() || this.movieDetails());
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    }).isRequired,
  }).isRequired,
};
