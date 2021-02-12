import React, { Component } from 'react';

import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.populateMovies();
  }

  async populateMovies() {
    const response = await movieAPI.getMovies();
    this.setState({
      movies: response,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (!loading) {
      return (
        <div className="movie-list" data-testid="movie-list">
          {movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />
          ))}
        </div>
      );
    }
    return <Loading />;
  }
}

export default MovieList;
