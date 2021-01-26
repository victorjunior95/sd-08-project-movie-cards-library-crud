import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movies: [],
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const movies = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies,
        });
      },
    );
  }

  showMovies() {
    const { movies } = this.state;
    return (
      <div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading
          ? <Loading />
          : this.showMovies()}
      </div>
    );
  }
}

export default MovieList;
