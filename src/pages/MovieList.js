import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState(
      (previous) => ({ ...previous, loading: true }),
      async (previous) => {
        const moviesRequest = await movieAPI.getMovies();
        this.setState({
          ...previous,
          loading: false,
          movies: moviesRequest,
        });
      },
    );
  }

  render() {
    const { loading, movies } = this.state;

    if (loading) return <Loading />;

    return (
      <>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </>
    );
  }
}

export default MovieList;
