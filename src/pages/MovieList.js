import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

// import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  /* constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  } */
  render() {
    return (
      <section data-testid="movie-list">
        <MovieCard />
      </section>
    );
  }
}

export default MovieList;
