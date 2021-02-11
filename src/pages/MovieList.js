import React, { Component } from 'react';
import { MovieCard, Loading } from '../components/index';

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
    const movies = await movieAPI.getMovies();
    console.log(movies);
    this.setState({ movies: [...movies] });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="flex-on" data-testid="movie-list">
        {movies.length > 0 ? movies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
        />))
          : <Loading />}
      </div>
    );
  }
}

export default MovieList;
