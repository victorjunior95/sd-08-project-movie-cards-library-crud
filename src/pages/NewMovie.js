import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit(/* newMovie */) {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
