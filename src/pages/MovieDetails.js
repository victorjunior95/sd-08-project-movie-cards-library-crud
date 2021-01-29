import React, { Component } from 'react';

// import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      mostra: undefined,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  render() {
    const { mostra } = this.state;
    console.log(mostra);
    // mude a condition para check o estate
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = {};
    console.log(title);

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

export default MovieDetails;
