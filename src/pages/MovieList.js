import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isRequestComplete: false,
    };
  }

  async componentDidMount() {
    await this.callGetMovies();
  }

  async callGetMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      isRequestComplete: true,
    });
  }

  render() {
    const { movies, isRequestComplete } = this.state;

    // Render Loading here if the request is still happening
    if (isRequestComplete === false) {
      return <Loading />;
    }

    return (
      <div className="movie-list" data-testid="movie-list">
        <div className="movie-card-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <br />
        <Link className="movie-list-new-link" to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
