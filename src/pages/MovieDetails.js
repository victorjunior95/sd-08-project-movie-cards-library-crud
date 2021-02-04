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
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => this.setState({ movie }));
  }

  movieInfo() {
    const { match: { params: { id } } } = this.props;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const editPath = `/movies/${id}/edit`;

    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ title }</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ editPath }>EDITAR</Link>
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
};

export default MovieDetails;
