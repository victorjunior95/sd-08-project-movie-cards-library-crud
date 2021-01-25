import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          Movie Card Library CRUD
          <MovieList />
          <MovieDetails />
          <NewMovie />
          <EditMovie />
          <NotFound />
        </div>
      </BrowserRouter>      
    );
  }
}

export default App;
