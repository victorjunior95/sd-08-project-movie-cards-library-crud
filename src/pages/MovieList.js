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
    this.renderMovieList = this.renderMovieList.bind(this);
    this.newState = this.newState.bind(this);
  }

  componentDidMount() {
    this.newState();
  }

  async newState() {
    const movieList = await movieAPI.getMovies();
    this.setState({
      movies: movieList,
      loading: false,
    });
  }

  renderMovieList() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        { loading ? <Loading /> : this.renderMovieList() }
      </div>
    );
  }
}

export default MovieList;
