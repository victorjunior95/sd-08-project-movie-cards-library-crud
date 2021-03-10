import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToMovieList: false,
      loading: true,
      movie: {},
    };
    this.btnMovieChange = this.btnMovieChange.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const dataMovieById = await movieAPI.getMovie(id);
    this.defineStateMovie(dataMovieById);
  }

  defineStateMovie(dataMovieById) {
    this.setState({
      movie: dataMovieById,
      loading: false,
    });
  }

  async btnMovieChange(MovieChanged) {
    await movieAPI.updateMovie(MovieChanged);
    this.setState({ redirectToMovieList: true });
  }

  render() {
    const { loading, redirectToMovieList, movie } = this.state;

    if (redirectToMovieList) return <Redirect to="/" />;

    if (loading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.btnMovieChange } />
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
