import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.renderLoading = this.renderLoading.bind(this);
    this.renderMovies = this.renderMovies.bind(this);

    this.state = {

    };
  }

  componentDidMount() {
    const { getMovies } = movieAPI;
    getMovies().then((movies) => this.setState({ movies }));
  }

  renderLoading() {
    return (
      <div data-testid="movie-list">
        <Loading />
      </div>
    );
  }

  renderMovies() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>MOVIELIST</h1>
        { movies ? this.renderMovies() : this.renderLoading() }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </>
    );
  }
}

export default MovieList;
