import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.callCard = this.callCard.bind(this);

    this.state = {
      movies: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.callCard();
  }

  callCard() {
    this.setState({ loading: true }, () => {
      movieAPI.getMovies().then((response) => this.setState({
        movies: response,
        loading: false,
      }));
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div>
        <Link to="/movies/new" className="buttons"> ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list" className="movie-list">
          {loading ? (
            <Loading />
          ) : (
            movies.map((movie) => (
              <MovieCard
                key={ movie.title }
                movie={ movie }
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default MovieList;
