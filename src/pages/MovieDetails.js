import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';

// eslint-disable-next-line
import * as movieAPI from '../services/movieAPI';
// eslint-disable-next-line
import { Loading } from '../components';

class MovieDetails extends Component {
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = {};
    const { id } = this.props.match.params;

    return (
      <div data-testid="movie-details">
        <p>{id}</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
