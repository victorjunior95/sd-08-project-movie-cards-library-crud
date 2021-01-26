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
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie, status: 'details' }));
  }

  delete() {
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
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/" class="link1">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` } class="link2">EDITAR</Link>
        <Link to="/" onClick={ this.delete }>DELETAR</Link>
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
// consultei https://github.com/tryber/sd-07-project-movie-card-library-crud/blob/08bc22ad390041c9465d970500a5cf2e57b498be/src/pages/MovieDetails.js para implementação das funções.
export default MovieDetails;
