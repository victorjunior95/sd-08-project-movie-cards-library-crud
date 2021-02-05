import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      status: 'loading',
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movieList) => this.setState({
      movies: movieList,
      status: 'complete',
    }));
  }

  render() {
    const { movies, status } = this.state;

    if (status === 'loading') {
      return (
        <div data-testid="movie-list">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          <Loading />
        </div>
      );
    }

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
