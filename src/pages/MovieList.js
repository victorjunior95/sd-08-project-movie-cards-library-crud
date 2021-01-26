import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
// import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.obtemFilmes();
  }

  async obtemFilmes() {
    const requestMovies = movieAPI.getMovies();
    // console.log(requestMovies.then((data) => console.log(data)));
    const allMovies = await requestMovies;
    this.setState({
      movies: allMovies,
    });
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {(movies.length === 0) ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
