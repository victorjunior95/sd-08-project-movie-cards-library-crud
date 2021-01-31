import React, { Component } from 'react';

import { Loading, MovieForm } from '../components';
// import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleSubmit(updatedMovie) {
  //   }

render() {
    //   const { shouldRedirect, movie } = this.state;
    const { loading } = this.state;

    // if (shouldRedirect) {
    //   // Redirect
    // }

    if (loading) return <Loading />;

    return (
      <div data-testid="edit-movie">
          EDIT MOVIE
          <MovieForm />
        {/* <MovieForm movie={ movie } onSubmit={ this.handleSubmit } /> */}
      </div>
    );
  }
}

export default EditMovie;
