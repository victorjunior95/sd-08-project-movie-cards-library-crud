import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoaded: false,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  async fetchMovies() {
    const { getMovies } = movieAPI;
    const movies = await getMovies();
    this.setState({ 
      movies: movies,
      isLoaded: true,
    });
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies, isLoaded } = this.state;

    // Render Loading here if the request is still happening
    if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      );
    }
  }
}

export default MovieList;
