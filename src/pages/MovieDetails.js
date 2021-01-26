import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovie(movieAPI.getMovie(id));
  }

  handleClick(deleteMovie) {
    movieAPI.deleteMovie(deleteMovie);
  }

  fetchMovie(result) {
    this.setState(
      { loading: true },
      async () => {
        this.setState({
          movie: await result,
          loading: false,
        });
      },
    );
  }

  renderMovieDetails() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div className="movie-card-body">
        <img alt="Movie Cover" className="movie-card-image" src={ `../${imagePath}` } />
        <h4 data-testid="movie-card-title" className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{`Subtitle: ${subtitle}`}</h5>
        <p className="movie-card-storyline">{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.handleClick(id) }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="movie-card" data-testid="movie-details">
        {loading ? <Loading /> : this.renderMovieDetails()}
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
