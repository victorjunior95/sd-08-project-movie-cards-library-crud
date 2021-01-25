import React, { Component } from 'react';
import { MovieCard, Loading } from '../components/index';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: false,
    };
    this.fetchAPIMovie = this.fetchAPIMovie.bind(this);
  }

  componentDidMount() {
    this.fetchAPIMovie();
  }

  async fetchAPIMovie() {
    this.setState(
      { loading: true },
      async () => {
        const movie = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: movie,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}
export default MovieList;
