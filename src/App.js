import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route
            path="/movies/new"
            render={ (props) => <NewMovie { ...props } /> }
          />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
