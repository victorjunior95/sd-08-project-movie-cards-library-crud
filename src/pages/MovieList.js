import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      status: 'loading',
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movieList) => this.setState({
      movies: movieList,
      status: 'complete',
    }));
  }

  render() {
    const { movies, status } = this.state;

    if (status === 'loading') {
      return (
        <div data-testid="movie-list">
          <Loading />
        </div>
      );
    }

    return (
      <div data-testid="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
