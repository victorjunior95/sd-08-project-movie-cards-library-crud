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
    const { movies } = this.state;
    if (isLoading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
