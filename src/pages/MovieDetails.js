import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

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
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleDelete() {
    const { id } = this.state;
    movieAPI.deleteMovie(id);
  }

  fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const { id } = this.state;
        const movie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie,
        });
      },
    );
  }

  renderMovieInfo(movie) {
    const { title, storyline, genre, rating, subtitle } = movie;

    return (
      <>
        <h2>{ `Title: ${title}` }</h2>
        <h3>{ `Subtitle: ${subtitle}` }</h3>
        <h4>{ `Genre: ${genre}` }</h4>
        <h5>{ `Rating: ${rating}` }</h5>
        <p>{ `Storyline: ${storyline}` }</p>
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
        {this.renderMovieInfo(movie)}
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.handleDelete }>DELETAR</Link>
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
