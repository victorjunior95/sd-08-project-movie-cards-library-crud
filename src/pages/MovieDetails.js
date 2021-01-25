import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
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
    });
  }

  contentMovieDetails() {
    const { movie: { title, storyline, imagePath, genre,
      rating, subtitle } } = this.state;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    const { movie } = this.state;
    return (
      <div data-testid="movie-details">
        { movie.length === 0 ? <Loading /> : this.contentMovieDetails() }
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
