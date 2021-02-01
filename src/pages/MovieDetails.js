import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';
import '../App.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);
    this.movieDetailsElement = this.movieDetailsElement.bind(this);
    this.buttonsElements = this.buttonsElements.bind(this);
    this.handleFetchClick = this.handleFetchClick.bind(this);

    this.state = {
      movieDetails: [],
      loadingDetails: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleFetchClick(id) {
    await movieAPI.deleteMovie(id);
  }

  async fetchMovie() {
    this.setState(
      { loadingDetails: true },
      async () => {
        const { match: { params: { id } } } = this.props;
        const movieDetails = await movieAPI.getMovie(id);
        this.setState({
          movieDetails,
          loadingDetails: false,
        });
      },
    );
  }

  movieDetailsElement() {
    const {
      movieDetails: { title, subtitle, storyline, imagePath, genre, rating },
    } = this.state;
    return (
      <section className="movie-body-details">
        <img className="movie-card-image" alt="Movie Cover" src={ `../${imagePath}` } />
        <p className="movie-details-title">{ `Title: ${title}` }</p>
        <article className="movie-card-body">
          <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
          <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p className="rating">{ `Rating: ${rating}` }</p>
        </article>
      </section>
    );
  }

  buttonsElements() {
    const { match: { params: { id } } } = this.props;
    return (
      <section className="button-content">
        <Link className="button" to={ `./${id}/edit` }>EDITAR</Link>
        <Link className="button" to="/">VOLTAR</Link>
        <Link
          className="button"
          to="/"
          onClick={ () => this.handleFetchClick(id) }
        >
          DELETAR
        </Link>
      </section>
    );
  }

  render() {
    const { loadingDetails } = this.state;
    if (loadingDetails) return <Loading className="movie-list" />;

    return (
      <main className="movie-card-details" data-testid="movie-details">
        <this.movieDetailsElement />
        <this.buttonsElements />
      </main>
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
