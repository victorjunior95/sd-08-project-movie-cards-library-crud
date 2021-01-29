import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = props;

    this.state = {
      id,
      loading: true,
      movie: {},
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async deleteHandler() {
    const { id } = this.state;
    await movieAPI.deleteMovie(id);
  }

  fetchMovie() {
    this.setState(
      { loading: true },
      async (previous) => {
        const { id } = this.state;
        const movie = await movieAPI.getMovie(id);
        this.setState({
          ...previous,
          loading: false,
          movie,
        });
      },
    );
  }

  movieInfo(movie) {
    const { title, storyline, genre, rating, subtitle } = movie;
    return (
      <>
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </>
    );
  }

  render() {
    const { loading, movie } = this.state;
    if (loading) return <Loading />;
    if (!movie) return <Redirect to="/" />;

    const { imagePath, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        { this.movieInfo(movie) }
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.deleteHandler }>DELETAR</Link>
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
