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
    const { movies, isLoading } = this.state;
    console.log(`movies ${movies}`);
    console.log(`isLoading ${isLoading}`);
    // Render Loading here if the request is still happening Estudar renderisação condicional usando IF?
    if (isLoading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
