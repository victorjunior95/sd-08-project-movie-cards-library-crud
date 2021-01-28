import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingEdit: true,
      movieEdit: [],
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchEditMovie = this.fetchEditMovie.bind(this);
  }

  componentDidMount() {
    this.fetchEditMovie();
  }

  async handleSubmit(updatedMovie) {
    /* const status =  */await movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
      /* status, */
    });
  }

  async fetchEditMovie() {
    this.setState(
      { loadingEdit: true },
      async () => {
        const { match: { params: { id } } } = this.props;
        const movieEdit = await movieAPI.getMovie(id);
        this.setState({
          movieEdit,
          loadingEdit: false,
        });
      },
    );
  }

  render() {
    const { loadingEdit, /* status, */ shouldRedirect, movieEdit } = this.state;
    if (shouldRedirect) return <Redirect exact to="/" />;
    if (loadingEdit) return <Loading className="movie-list" />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movieEdit } onSubmit={ this.handleSubmit } />
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
