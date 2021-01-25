import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const del = location.deleteMovie
      ? async () => { movieAPI.deleteMovie(location.deleteMovie); } : () => {};
    this.fetchMovies(del);
  }

  fetchMovies(callback = () => {}) {
    this.setState({ loading: true }, async () => {
      await callback();
      const movies = await movieAPI.getMovies();
      this.setState({
        movies,
        loading: false,
      });
    });
  }

  render() {
    const { loading, movies } = this.state;

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {loading ? <Loading /> : movies.map(
          (movie) => <MovieCard key={ movie.title } movie={ movie } />,
        )}
      </div>
    );
  }
}

MovieList.propTypes = {
  location: PropTypes.shape({
    deleteMovie: PropTypes.number,
  }).isRequired,
};

export default MovieList;
