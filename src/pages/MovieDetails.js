import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();    

    this.state = {
      movies: [],
    };
    
    this.hundleApi = this.hundleApi.bind(this);
  }

  componentDidMount() {
    this.hundleApi();
  }

  async hundleApi() { 
    const { match: { params: { id } } } = this.props;  
    const result = await movieAPI.getMovie(id);
    
    this.setState({
      movies: result,
    });
  }


  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    
    const { movies } = this.state;     ;    
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
 
    return (
      <div data-testid="movie-details">
        <Loading />
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>       
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={`/movies/${movies.id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
