import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.loadMovies();
  }

  async loadMovies() {
    this.setState({
      movies: [...await movieAPI.getMovies()],
      loading: false,
    });
  }

  render() {
    const { loading, movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      loading ? <Loading /> : <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
