// Bibliotecas React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// API
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    // const { match: { params: { id } } } = props;

    this.state = {
      movies: [],
      loading: true,
      ...props.match.params,
      // id,
    };

    this.fetchData = this.fetchData.bind(this);
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    const { id } = this.state;
    const data = await movieAPI.getMovie(id);

    if (data) {
      this.setState({
        movies: data,
        loading: false,
      });
    }
  }

  render() {
    const { movies, loading } = this.state;
    const { storyline, imagePath, genre, rating, subtitle } = movies;

    if (loading) {
      return <div>Carregando ...</div>;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
};

export default MovieDetails;
