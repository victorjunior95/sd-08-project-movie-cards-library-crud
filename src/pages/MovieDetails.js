import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
    this.hundleApi = this.hundleApi.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.hundleApi();
  }

  async handleDelete() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
  }

  async hundleApi() {
    const { match: { params: { id } } } = this.props;
    const result = await movieAPI.getMovie(id);

    this.setState({
      movies: result,
    });
  }

  render() {
    const { movies } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;

    return (
      <div data-testid="movie-details">
        <Loading />
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${movies.id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.handleDelete }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
