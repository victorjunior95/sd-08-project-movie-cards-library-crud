import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((data) => {
      this.setState({
        loading: false,
        movie: data,
      });
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(this.setState({ shouldRedirect: true }));
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (loading) return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
