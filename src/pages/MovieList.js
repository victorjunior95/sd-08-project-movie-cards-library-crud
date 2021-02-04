import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };

    this.renderMoviesList = this.renderMoviesList.bind(this);
    this.getApi = this.getApi.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    const result = await movieAPI.getMovies();
    this.setState({ movies: result, loading: true });

    return result;
  }

  renderMoviesList() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <>
          {this.renderMoviesList()}
        </>);
    }
    return (
      <Loading />);
  }
}

export default MovieList;
