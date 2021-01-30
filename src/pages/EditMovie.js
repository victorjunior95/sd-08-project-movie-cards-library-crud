import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { location: { state } } = this.props;
    const updatedMovie = state;
    this.state = {
      loading: false,
      updatedMovie,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(state) {
    await movieAPI.updateMovie(state);
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const requestMovie = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          updatedMovie: requestMovie,
        });
      },
    );
  }

  render() {
    const { loading, updatedMovie } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm
          movie={ updatedMovie }
          onSubmit={ this.handleSubmit }
        />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      updatedMovie: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        imagePath: PropTypes.string,
        id: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
