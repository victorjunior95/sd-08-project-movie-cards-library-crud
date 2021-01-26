import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoadiang: true,
      movie: {},
    };

    this.getMovieFromAPI = this.getMovieFromAPI.bind(this);
  }

  componentDidMount() {
    this.getMovieFromAPI();
  }

  getMovieFromAPI() {
    const { match: { params: { id } } } = this.props;
    this.setState({ isLoadiang: true }, async () => {
      const movieInfo = await movieAPI.getMovie(id);
      this.setState({
        movie: movieInfo,
        isLoadiang: false,
      });
    });
    this.linkOnClick = this.linkOnClick.bind(this);
  }

  noLoadingRender(movie) {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    const path = `/movies/${id}/edit`;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Título: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        {this.renderLinks(path)}
      </div>
    );
  }

  async linkOnClick() {
    const { movie } = this.state;
    await movieAPI.deleteMovie(movie.id);
    return <Redirect to="/" />;
  }

  renderLinks(path) {
    return (
      <div>
        <Link to="/">
          VOLTAR
        </Link>
        <Link to={ path }>
          EDITAR
        </Link>
        <Link to="/" onClick={ this.linkOnClick }>
          DELETAR
        </Link>
      </div>
    );
  }

  render() {
    const { isLoadiang } = this.state;
    const { movie } = this.state;
    return (
      <div data-testid="movie-details">
        {isLoadiang ? (<Loading />) : this.noLoadingRender(movie) }
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
