import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => {
        this.setState({
          movies: response,
          isLoading: false,
        });
      });
  }

  render() {
    const { movies, isLoading } = this.state;

    if (isLoading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
