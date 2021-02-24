import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    this.obtemFilme();
  }

  async obtemFilme() {
    const { match } = this.props;
    const { id } = match.params;
    const requestMovie = movieAPI.getMovie(id);
    const Movie = await requestMovie;
    this.setState({
      movie: Movie,
    });
  }

  deleteMovie(id) {
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (!title) return <Loading />;
    return (
      <div data-testid="movie-details">
        <p>{ `title: ${title}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link movie={ movie } to="/">VOLTAR</Link>
        <Link onClick={ () => this.deleteMovie(id) } to="/">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
