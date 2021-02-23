import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMovieList: [],
      mustRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    const returnAPI = await createMovie(newMovie);
    this.setState({
      newMovieList: [...returnAPI],
      mustRedirect: true,
    });
  }

  render() {
    const { newMovieList, mustRedirect } = this.state;

    if (mustRedirect) {
      return (
        <Redirect
          to={ { pathname: '/',
            state: newMovieList,
            // Nao precisa deste state pq a trybe ja colocou pra salvar
            // no localstorate pelo createMovie, era melhor ter usado uma api
          } }
        />);
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
