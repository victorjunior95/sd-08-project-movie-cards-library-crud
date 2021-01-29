import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = props;
    this.state = {
      id,
      loading: true,
      movie: {},
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async deleteHandler() {
    const { id } = this.state;
    await movieAPI.deleteMovie(id);
  }

  fetchMovie() {
    this.setState(
      { loading: true },
      async (previous) => {
        const { id } = this.state;
        const movie = await movieAPI.getMovie(id);
        this.setState({
          ...previous,
          loading: false,
          movie,
        });
      },
    );
  }

  render() {
    const { loading, movie } = this.state;
    if (loading) return <Loading />;
    if (!movie) return <Redirect to="/" />;
    const { title, storyline, imagePath, genre, rating, subtitle } = {};

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: Proptypes.objectOf({
    params: Proptypes.objectOf({
      id: Proptypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
