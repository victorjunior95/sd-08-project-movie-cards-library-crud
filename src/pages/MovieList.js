import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import '../css/MovieList.css';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      movies: [],
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ isLoading: true },
      async () => {
        this.setState({ movies: await movieAPI.getMovies(), isLoading: false });
      });
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening
    if (isLoading) return <Loading />;
    return (
      <div className="movie-list-container" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
