import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: false,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findMovie = this.findMovie.bind(this);
  }

  componentDidMount() {
    this.findMovie();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async findMovie() {
    const { match: { params: { id } } } = this.props;
    const result = await movieAPI.getMovie(id);
    this.setState({
      movie: result,
      status: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    if (status === true) {
      return (
        <div data-testid="edit-movie">
          <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        </div>
      );
    }
    return (
      <Loading />
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
