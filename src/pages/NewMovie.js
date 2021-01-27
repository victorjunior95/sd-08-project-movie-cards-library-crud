import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(newMovie) {
  // }

  render() {
    return (
      <div data-testid="new-movie">
        <p>Teste</p>
        <MovieForm onSubmit={ this.handleSubmit } />
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}
export default NewMovie;
