import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    console.log(id);

    movieAPI.getMovie(id)
      .then((response) => {
        this.setState({
          movie: response,
          isLoading: false,
        });
        console.log(response);
      });
  }

  render() {
    const { movie, isLoading } = this.state;
    console.log(movie, isLoading);
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { storyline, imagePath, genre, rating, subtitle } = { movie };
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: String.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
