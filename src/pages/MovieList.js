import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }
  componentDidMount(){
    movieAPI.getMovies().then((movies) => this.setState({ movies, isLoading: false }));
  }
  render() {
    const { movies, isLoading } = this.state;

    if (isLoading) return </Loading>

    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
          ))}
      </div>
    );
  }
}

export default MovieList;
