import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.attMovies = this.attMovies.bind(this);

    this.state = {
      movies: [],
      status: true,
    };
  }

  componentDidMount() {
    this.attMovies();
  }

  async attMovies() {
    const requestMovie = await movieAPI.getMovies();
    this.setState({ movies: requestMovie, status: false });
  }

  render() {
    const { movies, status } = this.state;
    if (status) {
      return <Loading />;
    }
    return (
      <div className="movie-list-style" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
