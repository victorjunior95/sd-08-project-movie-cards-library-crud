import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './MovieList';
import EditMovie from './EditMovie';
import MovieDetails from './MovieDetails';
import NewMovie from './NewMovie';
import NotFound from './NotFound';

class Index extends Component {
  render() {
    return (
      <main>
        <Route path="/" component={ MovieList } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route component={ NotFound } />
      </main>
    );
  }
}

export default Index;
