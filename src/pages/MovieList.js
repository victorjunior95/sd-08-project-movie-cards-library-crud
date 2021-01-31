import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const request = await movieAPI.getMovies();
    this.setState({
      movies: request,
    });
  }

  render() {
    const { movies } = this.state;
    const loadingElement = <span>Carregando...</span>;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { movies.length < 1 ? loadingElement
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
