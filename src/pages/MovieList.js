import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    movieAPI
      .getMovies()
      .then((element) => this.setState({ movies: element, isLoading: false }));
  }

  render() {
    const { movies, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
