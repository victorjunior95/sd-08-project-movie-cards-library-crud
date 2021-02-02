import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: {},
      shouldRedirect: false,

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadingDetails = this.loadingDetails.bind(this);
  }

  componentDidMount() {
    this.loadingDetails();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  async loadingDetails() {
    const { id } = this.props;
    const esperaDetalhes = await movieAPI.getMovie(id);
    this.setState({
      movie: esperaDetalhes,
      status: '',
    });
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
  id: PropTypes.string.isRequired,
};
export default EditMovie;
