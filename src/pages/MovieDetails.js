import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor() {
    super();

    this.renderLoading = this.renderLoading.bind(this);
    this.renderMovieDetails = this.renderMovieDetails.bind(this);

    this.state = {
      movie: undefined,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    console.log(id);
    movieAPI.getMovie(id).then((movie) => this.setState({ movie }));
  }

  renderLoading() {
    return (
      <Loading />
    );
  }

  renderMovieDetails() {
    const { movie } = this.state;
    const { id, title, imagePath, subtitle, storyline, genre, rating } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Título: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <p>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </p>
        <span>MovieDetails</span>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;

    return (
      <div>
        { movie ? this.renderMovieDetails() : this.renderLoading() }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    }).isRequired,
  }).isRequired,
};
