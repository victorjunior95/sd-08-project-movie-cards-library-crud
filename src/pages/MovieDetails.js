import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;
    this.state = {
      movieID: id,
      movie: {},
      load: true,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const { movieID } = this.state;
    const getMovie = await movieAPI.getMovie(movieID);
    this.setState({ movie: getMovie, load: false });
  }

  render() {
    const { movie:
      { title, storyline, imagePath, genre, rating, subtitle } } = this.state;
    const { load } = this.state;
    if (load) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <h3>{title}</h3>
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
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
