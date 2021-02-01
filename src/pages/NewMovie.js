import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      shouldRedirect: false,
      isLoading: true,
      movie: [],
    };
  }

  async handleSubmit(newMovie) {
    const myMovie = await movieAPI.createMovie(newMovie);
    if (myMovie === 'OK') {
      this.setState({
        shouldRedirect: true,
        isLoading: false,
        movie: newMovie,
      });
    }
  }

  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="new-movie" className="form-body">
        <MovieForm onSubmit={this.handleSubmit} />
        <Link className="form-button-back" to="/">VOLTAR</Link>
      </div>
    );
  }
}
export default NewMovie;
