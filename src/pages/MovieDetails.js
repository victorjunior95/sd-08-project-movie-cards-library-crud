import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };

    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    movieAPI.getMovie(id).then((movie) => {
      this.setState({
        movie,
        loading: false,
      });
    });
  }

  handleDeleteMovie() {
    const { movie: { id } } = this.state;

    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <p>{ `Title: ${movie.title}` }</p>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>

        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.handleDeleteMovie }>DELETAR</Link>
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
