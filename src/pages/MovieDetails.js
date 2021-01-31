import React, { Component } from "react";

import * as movieAPI from "../services/movieAPI";
import { Loading } from "../components";

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
    };
    this.movieRequest = this.movieRequest.bind(this);
  }
  componentDidMount() {
    this.movieRequest();
  }

  async movieRequest() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const request = await movieAPI.getMovie(id);
    console.log(request);
    this.setState({
      movie: request,
    });
  }

  render() {
    if (this.state.movie.length === 0) return <Loading />;

    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;
    console.log(this.state);

    return (
      <div data-testid="movie-details">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
