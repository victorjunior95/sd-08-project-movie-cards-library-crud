import React, { Component } from 'react';
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

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true }, async () => {
      const movies = await movieAPI.getMovies();
      this.setState({
        movies,
        loading: false,
      });
    });
  }

  render() {
    const { loading, movies } = this.state;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : movies.map(
          (movie) => <MovieCard key={ movie.title } movie={ movie } />,
        )}
      </div>
    );
  }
}

export default MovieList;
