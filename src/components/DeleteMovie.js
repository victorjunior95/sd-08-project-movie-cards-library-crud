import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class DeleteMovie extends React.Component {
  render() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
    return (<Redirect to="/" />);
  }
}

export default DeleteMovie;

DeleteMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    }).isRequired,
  }).isRequired,
};
