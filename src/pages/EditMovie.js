import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

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

  componentDidMount() {
    this.fetchApi();
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
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
      return <Redirect to="/" />; // window.location = '/';
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
