import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import MovieFormEdit from '../components/MovieFormEdit';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: true,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updatedMovie) {
    const { movie } = this.state;
    await movieAPI.updateMovie(updatedMovie);
    return ({ movie });
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const data = [await movieAPI.getMovie(id)];
    this.setState({
      movie: data,
      shouldRedirect: false,
    });
  }

  render() {
    const { movie, shouldRedirect } = this.state;

    if (shouldRedirect === true) {
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieFormEdit
          movie={ movie }
          match={ this.match }
          onSubmit={ this.handleSubmit }
        />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default EditMovie;
