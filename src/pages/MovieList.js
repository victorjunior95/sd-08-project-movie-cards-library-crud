import React, { Component } from 'react';
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

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happenin
    return (
      <div data-testid="movie-list" className="movie-list">
        {loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
