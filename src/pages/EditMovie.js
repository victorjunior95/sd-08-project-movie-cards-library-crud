import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const result = await movieAPI.getMovie(id);
    this.setState({
      movie: result,
      status:'Ok',
    });
  };

  async handleSubmit(updatedMovie) {    
    console.log(updatedMovie)
    await movieAPI.updateMovie(updatedMovie);
    this.setState({      
      shouldRedirect: true,
    });
  }

  render() {

    const { status, shouldRedirect, movie } = this.state;
    
    if (shouldRedirect) {
      return <Redirect exact to="/" />   
    }

    if (status === 'loading') {
      return <Loading />
    }

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
      id:PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
