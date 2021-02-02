import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchAPi = this.fetchAPi.bind(this);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchAPi();
  }

  async fetchAPi() {
    const result = await getMovies();
    this.setState({ movies: result });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {movies.length === 0 ? <Loading /> : movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        {/* {console.log(movies)} */}
      </div>
    );
  }
}

export default MovieList;
