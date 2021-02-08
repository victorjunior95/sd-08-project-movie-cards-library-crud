import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
    };

    this.movieInfo = this.movieInfo.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => this.setState({ movie }));
  }

  deleteCard() {
    const { movie: { id } } = this.state;
    const { history: { push } } = this.props;
    movieAPI.deleteMovie(id).then(() => push('/'));
  }

  links() {
    const { match: { params: { id } } } = this.props;
    return (
      <section>
        <Link
          to="/"
          onClick={ this.deleteCard }
        >
          DELETAR
        </Link>
        <Link to="/">VOLTAR</Link>
        <br />
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </section>
    );
  }

  movieInfo() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ title }</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        { this.links() }
      </div>
    );
  }

  render() {
    const { movie } = this.state;

    return (
      <div data-testid="movie-details">
        {
          Object.keys(movie).length === 0
            ? <Loading />
            : this.movieInfo()
        }
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default MovieDetails;
