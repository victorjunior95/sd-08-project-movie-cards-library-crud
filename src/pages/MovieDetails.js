import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => this.setState({ movie, loading: false }));
  }

  handleDelete() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
  }

  renderMovieDetails() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/" onClick={ this.handleDelete }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
    return this.renderMovieDetails();
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
