import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    await this.request();
  }

  async request() {
    const requestAPI = await movieAPI.getMovies();
    this.setState({movies : requestAPI});
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.length === 0 ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        )}
      </div>
    );
  }
}

export default MovieList;
