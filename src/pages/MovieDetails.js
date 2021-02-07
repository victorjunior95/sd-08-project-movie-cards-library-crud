import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
      deleteMovie: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getFilm();
  }

  handleDelete() {
    const { movie } = this.state;
    const { id } = movie;
    movieAPI.deleteMovie(id).then(() => {
      this.setState({
        deleteMovie: true,
      });
    });
  }

  async getFilm() {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
      loading: false,
    });
  }

  renderMovie() {
    const { movie, deleteMovie } = this.state;
    if (deleteMovie) return <Redirect to="/" />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <h1>{ movie.title }</h1>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `${movie.id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.handleDelete }>DELETAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (

      loading ? <Loading /> : this.renderMovie()

    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
