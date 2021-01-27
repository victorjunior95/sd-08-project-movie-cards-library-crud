import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getMovie, updateMovie } from '../services/movieAPI';
import { Loading, MovieForm } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieF: {},
      isLoading: false,
      shouldRedirect: false,

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getMovie(id).then(
      (results) => {
        this.setState({
          movieF: results,
          isLoading: true,
        });
      },
    );
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;

      // Redirect
    }

    const { isLoading, movieF } = this.state;
    return (
      <div data-testid="edit-movie">
        {isLoading
          ? <MovieForm movie={ movieF } onSubmit={ this.handleSubmit } />
          : <Loading /> }
      </div>
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
