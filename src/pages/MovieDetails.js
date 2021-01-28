import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((result) => {
      this.setState({
        movie: result,
      });
    });
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (!movie) return <Loading />;

    return (
      <div data-testid="movie-details" className="movie-card-body">
        <img alt="Movie Cover" src={ `../${imagePath}` } className="details-image" />
        <p className="movie-card-title">{ `Title: ${title}` }</p>
        <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
        <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p className="rating">{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` } className="linksDetails">EDITAR</Link>
        <Link to="/" className="linksDetails">VOLTAR</Link>
        <Link to="/" onClick={ this.handleDelete } className="linksDetails">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
