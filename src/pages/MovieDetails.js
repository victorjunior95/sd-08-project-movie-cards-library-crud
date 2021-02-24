import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.requestMovie = this.requestMovie.bind(this);
    this.movieDetailsElement = this.movieDetailsElement.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.requestMovie(match.params.id);
  }

  async requestMovie(movieId) {
    const movie = await movieAPI.getMovie(movieId);
    this.setState({
      loading: false,
      movie,
    });
  }

  movieDetailsElement() {
    const { movie } = this.state;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <p>{ `Title: ${movie.title}` }</p>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
      </div>
    );
  }

  deleteMovie() {
    const { match } = this.props;
    movieAPI.deleteMovie(match.params.id);
  }

  render() {
    const { movie, loading } = this.state;

    return (
      <section>
        {loading
          ? <Loading />
          : this.movieDetailsElement()}
        <div>
          <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </section>
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
