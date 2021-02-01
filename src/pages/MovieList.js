import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.fetchMoviesAPI = this.fetchMoviesAPI.bind(this);
    this.mapMovieElements = this.mapMovieElements.bind(this);
  }

  componentDidMount() {
    this.fetchMoviesAPI();
  }

  async fetchMoviesAPI() {
    const movieData = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: movieData,
    });
    console.log(movieData);
  }

  mapMovieElements() {
    const { movies } = this.state;
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    const loadingElement = <Loading />;

    return (
      <div data-testid="movie-list">
        <div>{loading ? loadingElement : this.mapMovieElements()}</div>
      </div>
    );
  }
}

export default MovieList;
