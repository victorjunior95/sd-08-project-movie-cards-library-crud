import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((result) => this.setState({ movie: result }));
  }

  handleClick(deleteMovie) {
    movieAPI.deleteMovie(deleteMovie);
  }

  render() {
    const { movie } = this.state;
    if (!movie) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.handleClick(id) }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
