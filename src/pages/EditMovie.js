import React, { Component } from 'react';

import { Loading, MovieForm } from '../components';
import { getMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {

  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi() {
    const { id } = this.props.match.params;
    this.setState({
      loading: true,
    }, async () => {
      await getMovie(id)
        .then((response) => this.setState({
          movie: response,
          loading: false,
        }));
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    return (
      <div data-testid="edit-movie">
        {loading ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}

      </div>
    );
  }
}

export default EditMovie;
