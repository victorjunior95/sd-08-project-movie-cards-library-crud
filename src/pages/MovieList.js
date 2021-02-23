import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      apiCall: true,
    };
    this.returnApi = this.returnApi.bind(this);
  }

  componentDidMount() {
    this.returnApi();
  }

  async returnApi() {
    const movieApiReturn = await getMovies();
    const { location: { numberFromArray } } = this.props;
    const { location: { state } } = this.props;
    movieApiReturn[numberFromArray] = { ...movieApiReturn[numberFromArray], ...state };
    this.setState({
      movies: [...movieApiReturn],
      apiCall: false,
    });
  }

  render() {
    const { movies, apiCall } = this.state;
    return (
      <div data-testid="movie-list">
        {apiCall
          ? <Loading />
          : movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>

      </div>
    );
  }
}

MovieList.propTypes = {
  location: PropTypes.shape({
    numberFromArray: PropTypes.arrayOf(PropTypes.object),
    state: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default MovieList;
