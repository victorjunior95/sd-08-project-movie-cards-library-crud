import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((res) => {
      this.setState({
        movies: res,
        isLoading: false,
      });
    });
  }

  render() {
    const { isLoading } = this.state;
    // Render Loading here if the request is still happening Estudar renderisação condicional usando IF?
    if (isLoading) return <Loading />;
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
