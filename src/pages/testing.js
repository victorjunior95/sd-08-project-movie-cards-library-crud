import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      // movies, will be set on mount
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((resolve) => this.setState({ movies: resolve, loading: false }));
  }

  renderMovieListHome() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } id="123sd43" name="huaiaasasasdasdaddasdsdsdhasdasdashdaosdfhaasdasdasdasosdjfhaosijfd" value="9807979" />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return loading ? <Loading /> : this.renderMovieListHome();
  }
}

export default MovieList;
