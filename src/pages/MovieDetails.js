import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
      hasLoading: true,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleDelete() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovie(id);
    const data = await response;
    this.setState({ movie: data, hasLoading: false });
  }

  renderMovieDetailsLink() {
    const { match: { params: { id } } } = this.props;
    return (
      <p>
        <Link to={ `/movies/${id}/edit` }>
          EDITAR
        </Link>
        <Link to="/" onClick={ this.handleDelete }>
          DELETAR
        </Link>
        <Link to="/">
          VOLTAR
        </Link>
      </p>
    );
  }

  renderMovieDetails() {
    const {
      movie: { title, storyline, imagePath, genre, rating, subtitle },
    } = this.state;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{title}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        {this.renderMovieDetailsLink()}
      </div>
    );
  }

  render() {
    const { hasLoading } = this.state;

    if (hasLoading) return <Loading />;

    return (
      <>
        {this.renderMovieDetails()}
      </>
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
