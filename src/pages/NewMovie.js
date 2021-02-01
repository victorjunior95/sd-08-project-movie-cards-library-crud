import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      status: '',
    };
  }

  async handleSubmit(newMovie) {
    const status = await movieAPI.createMovie(newMovie);
    this.setState({
      status,
    });
  }

  render() {
    const { status } = this.state;
    if (status === 'OK') {
      alert('FILME ADICIONADO COM SUCESSO');
      return (<Redirect to="/" />);
    }
    return (
      <section>
        <div data-testid="new-movie">
          <MovieForm onSubmit={ this.handleSubmit } />
        </div>
        <Link to="/">VOLTAR</Link>
      </section>
    );
  }
}
export default NewMovie;
