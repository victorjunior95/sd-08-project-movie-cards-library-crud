import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const getMovies = await movieAPI.getMovies();
        this.setState({
          movies: getMovies,
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
        <div>{ loading ? <Loading /> : null }</div>
        <Link className="link" to="/movies/new">
          ADICIONAR CARTÃO
        </Link>
      </div>
    );
  }
}

export default MovieList;
