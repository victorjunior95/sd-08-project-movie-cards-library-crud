import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import './movieList.css';

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
    this.attMovies();
  }

  async attMovies() {
    const result = await movieAPI.getMovies();
    this.setState({ movies: result, loading: 0 });
  }

  exibe() {
    const { movies, loading } = this.state;

    return (
      <div className="movie-list">
        <Link to="/movies/new" className="btn-add">ADICIONAR CARTÃO</Link>
        {!loading
          && movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    // Render Loading here if the request is still happenin
    return (
      <div data-testid="movie-list">
        {loading ? <Loading />
          : this.exibe()}

      </div>
    );
  }
}

export default MovieList;
