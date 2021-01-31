import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline } = movies;
    return (
      <div data-testid="movie-card">
        Movie Card
        <p>{ title }</p>
        <p>{ storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
