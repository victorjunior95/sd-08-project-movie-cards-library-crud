import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.getMovieFunc = this.getMovieFunc.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      status: false,
      movie: '',
    };
  }

  componentDidMount() {
    this.getMovieFunc();
  }

  async getMovieFunc() {
    const { match: { params: { id } } } = this.props;
    const requestMovie = await movieAPI.getMovie(id);
    this.setState({ status: true, movie: requestMovie });
  }

  async deleteMovie() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie:
      { imagePath, subtitle, storyline, genre, rating, title, id }, status } = this.state;
    if (!status) { return (<Loading />); }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.deleteMovie(id) }>
          DELETAR
        </Link>
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
