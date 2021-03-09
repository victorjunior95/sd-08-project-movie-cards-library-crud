import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
      redirectToMovieList: false,
    };
    this.linkDeleteMovie = this.linkDeleteMovie.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const dataMovieById = await movieAPI.getMovie(id);
    this.defineStateMovie(dataMovieById);
  }

  async linkDeleteMovie() {
    const { movie } = this.state;
    await movieAPI.deleteMovie(movie.id);
    this.setState({ redirectToMovieList: true });
  }

  defineStateMovie(dataMovieById) {
    this.setState({
      movie: dataMovieById,
      loading: false,
    });
  }

  render() {
    const { movie, loading, redirectToMovieList } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (loading) return <Loading />;
    if (redirectToMovieList) return <Redirect to="/" />;

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
        <Link onClick={ this.linkDeleteMovie } to="/">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
