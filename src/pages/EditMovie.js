import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import { NotFound } from '.';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((answer) => {
      if (answer.lenght === 0) {
        return (
          this.setState({
            shouldRedirect: true,
          }));
      } return (
        this.setState({
          movie: answer,
          isLoading: false,
          shouldRedirect: false,
        }));
    });
  }

  handleSubmit(/* updatedMovie */) {
  }

  render() {
    const { shouldRedirect, movie, isLoading } = this.state;
    if (shouldRedirect) {
      return (<NotFound />);
    }

    if (isLoading) {
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
EditMovie.defaultProps = {
  match: '',
};

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default EditMovie;
