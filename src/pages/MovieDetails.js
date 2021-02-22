import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: undefined,
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.fetchGetMovie(params.id);
  }

  async fetchGetMovie(id) {
    const request = await movieAPI.getMovie(id);
    this.setState({
      movie: request,
    });
  }

  render() {
    const { movie } = this.state;
    if (movie === undefined) return <Loading />;
    const { storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
