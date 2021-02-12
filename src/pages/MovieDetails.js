import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.callMovie = this.callMovie.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    this.callMovie();
  }

  callMovie() {
    const { match: { params: { id } },
    } = this.props;
    movieAPI.getMovie(id).then((result) => this.setState({ movie: result }));
  }

  renderMovie() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    const { movie } = this.state;
    return (
      <div data-testid="movie-details">
        { !movie ? <Loading />
          : this.renderMovie()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
