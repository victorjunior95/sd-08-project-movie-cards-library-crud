import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(newMovie) {

  // }

  emptyState() {
    return { bookmarked: false,
      genre: '',
      id: '',
      imagePath: '',
      rating: '',
      storyline: '',
      subtitle: '',
      title: '' };
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm movie={ this.emptyState() } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
