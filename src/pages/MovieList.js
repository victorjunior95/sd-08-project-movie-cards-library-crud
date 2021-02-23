import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    const { location: { index } } = this.props;
    const { location: { state } } = this.props;
    const data = await movieAPI.getMovies();
    data[index] = { ...data[index], ...state };
    this.setState({
      movies: [...data],
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        { loading
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

MovieList.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieList;
