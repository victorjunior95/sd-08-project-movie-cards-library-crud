import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this._isMounted = true;
    if (this._isMounted) {
      this.populateEditFormById(id);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async handleSubmit(updatedMovie) {
    this.setState({ status: 'loading' });
    await movieAPI.updateMovie(updatedMovie);
    if (this._isMounted) {
      this.setState({
        movie: {},
        shouldRedirect: true,
      });
    }
  }

  async populateEditFormById(id) {
    const response = await movieAPI.getMovie(id);
    if (this._isMounted) {
      this.setState({
        status: 'ok',
        movie: response,
      });
    }
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default EditMovie;
