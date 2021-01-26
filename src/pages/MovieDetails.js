import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import movies from '../services/movieData';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
      deletedMovie: false,
    };
    this.renderDetails = this.renderDetails.bind(this);
  }

  componentDidMount() {
    this.getThisMovie();
  }

  async getThisMovie() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const gotMovie = await getMovie(id);
    this.setState({
      movie: gotMovie,
      loading: false,
    });
  }

  renderDetails() {
    const { match: { params: { id } } } = this.props;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{`Filme nº ${id}`}</h1>
        <h2>{ `Title: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { loading } = this.state;

    return (
      <div>
        {loading ? <Loading /> : this.renderDetails()}
      </div>

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
