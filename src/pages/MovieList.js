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
    };
  }

  async componentDidMount() {
    const data = await movieAPI.getMovies();
    this.defineStateMovies(data);
  }

  defineStateMovies(data) {
    this.setState({
      movies: data,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <>
        <div data-testid="movie-list">
          {movies.map((el) => <MovieCard key={ el.id } movie={ el } />)}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </>
    );
  }
}

export default MovieList;
