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
    this.fetchMovies(movieAPI.getMovies());
  }

  fetchMovies(result) {
    this.setState(
      { loading: true },
      async () => {
        this.setState({
          movies: await result,
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div>
        <p><Link to="/movies/new">ADICIONAR CARTÃO</Link></p>
        <div className="movie-list" data-testid="movie-list">
          {loading ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
