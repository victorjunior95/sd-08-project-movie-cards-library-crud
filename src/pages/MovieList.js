import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchAPIMovie = this.fetchAPIMovie.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchAPIMovie();
  }

  async fetchAPIMovie() {
    this.setState(
      { loading: true },

      async () => {
        const movie = await getMovies();
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
