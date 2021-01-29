import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((obj) => {
      this.setState({
        movies: obj,
        isLoaded: true,
      });
    });
  }

  render() {
    const { movies, isLoaded } = this.state;

    if (!isLoaded) return (<Loading />);
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
