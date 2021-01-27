import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import '../css/MovieList.css';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({ movies, isLoading: false }));
  }

  render() {
    const { movies, isLoading } = this.state;
    if (isLoading) return <Loading />;

    return (
      <div className="movie-list-container" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
