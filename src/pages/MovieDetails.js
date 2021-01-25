import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
// import movies from '../services/movieData';

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
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (deleteMovie) return <Redirect to="/" />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie  Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `${id}/edit` }>EDITAR</Link>
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
