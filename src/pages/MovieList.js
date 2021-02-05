import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
    this.loading = this.loading.bind(this);
    this.list = this.list.bind(this);
  }

  loading() {
    const { loading } = this.state;
    if (loading) {
      movieAPI.getMovies()
        .then((movies) => {
          this.setState({ movies });
          this.setState({ loading: false });
        });
      return (<Loading />);
    }
  }

  list() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={ movie.title }
            id={ movie.id }
            title={ movie.title }
            storyline={ movie.storyline }
          />))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }

  render() {
    return (this.loading() || this.list());
  }
}

export default MovieList;
