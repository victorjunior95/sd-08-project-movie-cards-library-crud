import React, { Component } from 'react';
import { MovieCard, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    await this.getMovies();
    this.updateLoading(false);
  }

  async getMovies() {
    const date = await movieAPI.getMovies();
    this.setState({
      movies: date,
    });
  }

  updateLoading(exibir) {
    this.setState({
      loading: exibir,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <>
        {loading && <Loading />}
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </>
    );
  }
}

export default MovieList;
