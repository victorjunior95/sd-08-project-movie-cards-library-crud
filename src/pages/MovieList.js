import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    // const movies = movieAPI.getMovies().then((resolve) => resolve);
    // console.log(movies);
    this.state = {
      loading: true,
      // movies,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((resolve) => this.setState({ movies: resolve, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;
    console.log(movies);
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
