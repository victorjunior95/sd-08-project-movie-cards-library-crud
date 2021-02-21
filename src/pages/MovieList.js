import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MovieCard, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

export default class MovieList extends Component {
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

    return (
      <div data-testid="movie-list">
        {loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}
