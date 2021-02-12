import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchcMovie = this.fetchMovie.bind(this);
    this.state = {
      movie: undefined,
      loading: true,
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

  render() {
    const { loading, movie } = this.state;
    const { match } = this.props;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <div>
          <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
          <h2>{movie.title}</h2>
          <p>{ `Subtitle: ${movie.subtitle}` }</p>
          <p>{ `Storyline: ${movie.storyline}` }</p>
          <p>{ `Genre: ${movie.genre}` }</p>
          <p>{ `Rating: ${movie.rating}` }</p>
        </div>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${match.params.id}/edit` }>EDITAR</Link>
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
