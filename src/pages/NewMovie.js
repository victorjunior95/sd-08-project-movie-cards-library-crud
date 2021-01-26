import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    createMovie(newMovie);
    this.setState({
      shouldRedirect: 'done',
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect === 'done') {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
