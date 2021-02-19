import React, { Component } from 'react';
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

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const getMovies = await movieAPI.getMovies();
        this.setState({
          movies: getMovies,
          loading: false,
        })
        console.log(this.state.movies);
      }
    )
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies, loading } = this.state;
    const loadingElement = <span>Carregando...</span>;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}

        <p>{ loading ? loadingElement : null }</p>
      </div>
    );
  }
}

export default MovieList;
