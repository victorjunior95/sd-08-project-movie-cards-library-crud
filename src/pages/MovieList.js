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
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const getMovies = await movieAPI.getMovies();
        this.setState({
          movies: getMovies,
          loading: false,
        })
      }
    )
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}

        <p>{ loading ? <Loading /> : null }</p>
      </div>
    );
  }
}

export default MovieList;
