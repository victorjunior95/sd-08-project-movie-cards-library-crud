import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    const data = await movieAPI.getMovies();
    this.setState({ movies: data });
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
