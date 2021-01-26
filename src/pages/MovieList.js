import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: 1,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const result = await movieAPI.getMovies();
    this.setState({
      movies: result,
      loading: 0,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div>
        <div data-testid="movie-list">
          {loading ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
      </div>
    );
  }
}

export default MovieList;
