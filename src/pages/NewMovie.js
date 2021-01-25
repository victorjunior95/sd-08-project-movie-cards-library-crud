import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    const {
      history: { push },
    } = this.props;
    return push('/');
  }

  render() {
    return (
      <div data-testid="new-movie">
        <span> TESTE </span>
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
NewMovie.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
NewMovie.defaultProps = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
export default NewMovie;
