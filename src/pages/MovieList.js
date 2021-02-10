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
      loading: true,
      newMovie: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((data) => {
      this.setState({
        movies: data,
        loading: false,
        newMovie: true,
      });
    });
  }

  render() {
    const { movies, loading, newMovie } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        { loading && <Loading /> }
        {newMovie && <Link to="/movies/new">ADICIONAR CARTÃO</Link>}
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
