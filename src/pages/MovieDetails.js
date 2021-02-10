import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movieInfo: {},
    };
  }

  componentDidMount() {
    this.loadMovie();
  }

  async loadMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const loadedMovie = await movieAPI.getMovie(id);
    this.setState({ loading: false, movieInfo: loadedMovie });
  }

  async deleteMovies() {
    const { match } = this.props;
    const { id } = match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movieInfo: { title, storyline, imagePath,
      genre, rating, subtitle }, loading } = this.state;
    const { match } = this.props;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Título: ${title}` }</p>
        <p>{ `Subtítulo: ${subtitle}` }</p>
        <p>{ `Sinopse: ${storyline}` }</p>
        <p>{ `Gênero: ${genre}` }</p>
        <p>{ `Avaliação: ${rating}` }</p>
        <Link to={ `/movies/${match.params.id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.deleteMovies() }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
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
