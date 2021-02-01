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
      status: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchEditMovie = this.fetchEditMovie.bind(this);
  }

  componentDidMount() {
    this.fetchEditMovie();
  }

  async handleSubmit(updatedMovie) {
    const status = await movieAPI.updateMovie(updatedMovie);
    this.setState({
      status,
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
    const { loadingEdit, status, movieEdit } = this.state;

    if (status === 'OK') {
      alert('FILME EDITADO COM SUCESSO');
      return (<Redirect to="/" />);
    }

    if (loadingEdit) return (<Loading className="movie-list" />);

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
