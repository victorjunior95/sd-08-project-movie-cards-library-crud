import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.del = this.del.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie, status: 'details' }));
  }

  del() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { movie, status, shouldRedirect } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (shouldRedirect) { return <Redirect to="/" />; }
    if (status === 'loading') { return <Loading />; }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/" class="link1">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` } class="link2">EDITAR</Link>
        <Link to="/" onClick={ this.del }>DELETAR</Link>
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
