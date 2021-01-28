import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import './MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.moviesFetch = this.moviesFetch.bind(this);
  }

  componentDidMount() {
    this.moviesFetch();
  }

  async moviesFetch() {
    this.setState({
      loading: true,
    }, async () => {
      await movieAPI.getMovies().then((response) => this.setState({
        loading: false,
        movies: response,
      }));
    });
  }

  render() {
    const { movies, loading } = this.state;
    const renderMovieCards = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <div>
        <div data-testid="movie-list" className="movie-list">
          {loading ? <Loading /> : renderMovieCards}
        </div>
        <div className="link">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
