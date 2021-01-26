import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.attMovies = this.attMovies.bind(this);

    this.state = {
      movies: [],
      status: true,
    };
  }

  componentDidMount() {
    this.attMovies();
  }

  async attMovies() {
    const { movies } = this.state;
    const requestMovie = await movieAPI.getMovies();
    this.setState({ movies: requestMovie }, () => console.log(movies, requestMovie));
  }

  render() {
    const { movies, status } = this.state;

    if (status) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
