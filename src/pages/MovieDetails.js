import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };

    this.findMovie = this.findMovie.bind(this);
  }

  componentDidMount() {
    this.findMovie();
  }

  async findMovie() {
    const { match: { params: { id } } } = this.props;
    const result = await getMovie(id);
    this.setState({
      movie: result,
      loading: false,
    });
  }

  contentMovieDetails() {
    const { movie: { title, storyline, imagePath, genre,
      rating, subtitle, id } } = this.state;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    if (loading === true) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        { this.contentMovieDetails() }
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
