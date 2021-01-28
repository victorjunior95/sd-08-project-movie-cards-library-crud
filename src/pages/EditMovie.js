import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingMessenge: true,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovie(id);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  async fetchMovie(id) {
    this.setState({
      movie: await movieAPI.getMovie(id),
      loadingMessenge: false,
    });
  }

  render() {
    const { shouldRedirect, movie, loadingMessenge } = this.state;
    if (shouldRedirect) {
      return <Redirect exact to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        { loadingMessenge
          ? <Loading />
          : (
            <>
              <div className="page-title">Movie Editor</div>
              <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
            </>
          )}
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
