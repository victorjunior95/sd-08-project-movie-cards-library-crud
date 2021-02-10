import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieList from '../pages/MovieList';

class Home extends Component {
  render() {
    return (
      <div>
        <MovieList />
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default Home;
export { default as Loading } from './Loading';
export { default as MovieForm } from './MovieForm';
export { default as MovieCard } from './MovieCard';
