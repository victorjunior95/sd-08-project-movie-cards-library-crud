import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: {},
      load: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((result) => this.setState({ movies: result, load: false }));
  }

  render() {
    const { movies, load } = this.state;

    // Render Loading here if the request is still happening
    if (load) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movies={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
