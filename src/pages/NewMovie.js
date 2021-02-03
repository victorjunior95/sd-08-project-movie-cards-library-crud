import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './NewMovie.css';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({ loading: true }, async () => {
      await movieAPI.createMovie(newMovie);
      this.setState({ loading: false, shouldRedirect: true });
    });
  }

  render() {
    const { loading, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div className="edit-movie-container" data-testid="new-movie">
        <div className="edit-movie-form">
          {loading ? <Loading /> : <MovieForm onSubmit={ this.handleSubmit } />}
        </div>
      </div>
    );
  }
}
export default NewMovie;
