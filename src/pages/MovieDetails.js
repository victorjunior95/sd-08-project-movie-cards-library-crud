import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchcMovie = this.fetchMovie.bind(this);
    this.deleteTheMovie = this.deleteTheMovie.bind(this);
    this.state = {
      movie: [],
      loading: true,
      redirect: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.fetchMovie(match.params.id);
  }

  async fetchMovie(id) {
    const Movie = await movieAPI.getMovie(id);
    this.setState({ movie: Movie, loading: false });
  }

  async deleteTheMovie() {
    const { movie } = this.state;
    movieAPI.deleteMovie(movie.id);
    this.setState({ redirect: true });
  }

  render() {
    const { loading, movie, redirect } = this.state;
    const { match } = this.props;
    if (loading) return <Loading />;
    if (redirect) return <Redirect to="/" />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <h2>{movie.title}</h2>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link className="link red" to="/" onClick={ this.deleteTheMovie }>DELETAR</Link>
        <Link className="link" to="/">VOLTAR</Link>
        <Link className="link" to={ `/movies/${match.params.id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default MovieDetails;
