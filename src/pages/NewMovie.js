import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Loading from '../components/Loading';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({ loading: true }, async () => {
      await movieAPI.createMovie(newMovie);
      this.setState({
        loading: false,
        redirect: true,
      });
    });
  }

  render() {
    const { loading, redirect } = this.state;

    if (redirect) return <Redirect to="/" />;

    return (
      <div data-testid="new-movie">
        {loading ? <Loading /> : <MovieForm onSubmit={ this.handleSubmit } /> }
      </div>
    );
  }
}
export default NewMovie;
