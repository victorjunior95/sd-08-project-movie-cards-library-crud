import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import './MovieList.css';

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

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const { getMovies } = movieAPI;
    const moviesRecieved = await getMovies();
    this.setState({
      movies: moviesRecieved,
      isLoaded: true,
    });
  }

  render() {
    const { movies, isLoaded } = this.state;

    if (!isLoaded) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list" className="movie-list-container">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
