import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';


import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    movieAPI.getMovies().then((myFetchMovies) =>
    this.setState({
      movies: myFetchMovies,
      isLoading: false,
    }));
  }

  render() {
    const { movies, isLoading } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div className="teste">
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <Link className="add-movie" to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
