import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.populateDetails(id);
  }

  async populateDetails(id) {
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
      loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;
    if (!loading) {
      const { storyline, imagePath, genre, rating, subtitle } = movie;
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
      );
    }
    return <Loading />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieDetails;
