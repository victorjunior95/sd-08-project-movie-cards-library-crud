import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    getMovies().then(
      (results) => {
        this.setState({
          movies: results,
          isLoading: true,
        });
      },
    );
  }

  render() {
    const { movies, isLoading } = this.state;

    return (

      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {
          isLoading
            ? movies.map((movie) => (<MovieCard
              key={ movie.title }
              movie={ movie }
            />))
            : <Loading />
        }
      </div>

    );
  }
}

export default MovieList;
