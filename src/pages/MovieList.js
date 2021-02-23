import React, { Component } from 'react';
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
    // this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  // componentDidUpdate() {
  //   this.updateData();
  // }

  async getPosts() {
    const { location: { qualquerCoisa } } = this.props;
    const { location: { state } } = this.props;
    const data = await movieAPI.getMovies();
    data[qualquerCoisa] = { ...data[qualquerCoisa], ...state };
    this.setState({
      movies: [...data],
      loading: false,
    });
  }

  // updateData() {
  //   const { movies } = this.state;
  //   const { location: { qualquerCoisa } } = this.props;
  //   const { location: { state } } = this.props;
  //   const newInfo = { ...movies[qualquerCoisa], ...state };
  //   this.setState({
  //     movies: [...movies, newInfo],
  //   });
  // }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        { loading
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  location: PropTypes.string.isRequired,
};

export default MovieList;
