import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: undefined,
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.fetchMovie(params.id);
  }

  async fetchMovie(id) {
    const requestObject = await movieAPI.getMovie(id);
    this.setState({
      movie: requestObject,
    });
  }

  async deleteMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state  // if (true) return <Loading />;
    const { movie } = this.state;
    if (movie === undefined) { return <Loading />; }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <p>{ `Title: ${movie.title}` }</p>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.deleteMovie(movie.id) }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
