import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {movie:{title, storyline}} = this.props;
    return (
      <div data-testid="movie-card">
        Movie Card
        <p>{title}</p>
        <p>{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
