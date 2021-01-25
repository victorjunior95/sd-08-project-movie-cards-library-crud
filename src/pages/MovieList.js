import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    try {
      const list = await movieAPI.getMovies();
      this.setState({ movies: list });
    } catch (e) {
      console.log('error');
    }
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.length === 0 ? (
          <Loading />
        ) : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        )}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
