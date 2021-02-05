import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ redirect: true });
  }

  redirect() {
    const { redirect } = this.state;
    return (redirect && <Redirect to="/" />);
  }

  render() {
    const blankMovie = {
      id: 2,
      title: 'Final Fantasy',
      subtitle: 'Spirits Within',
      storyline: ' ',
      rating: 4.5,
      imagePath: 'images/Final_Fantasy_Spirits_Within.jpg',
      bookmarked: false,
      genre: 'fantasy',
    };
    return (this.redirect()
      || (
        <div data-testid="new-movie">
          <MovieForm onSubmit={ this.handleSubmit } movie={ blankMovie } />
        </div>)
    );
  }
}
export default NewMovie;
