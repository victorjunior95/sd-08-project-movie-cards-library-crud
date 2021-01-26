import React from 'react';
import {BrowserRouter, Router, Switch ,Redirect} from 'react-router-dom'
import MovieList from './src/pages/MovieList'
import MovieDetails from './src/pages/MovieDetails'
import EditMovie from './src/pages/EditMovie'
import NewMovie from './src/pages/NewMovie'
import NotFound from './src/pages/NotFound'

// https://stackoverflow.com/questions/32128978/react-router-no-not-found-route
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Router exact path="/" component={MovieList} />
        <Router path="/movies/">
          <Router path="/movies/:id" component={MovieDetails} >
            <Router path="/movies/:id/edit" component={EditMovie} />
          </Router>
          <Router path="/movies/new" component={NewMovie} />
        </Router>
      </Switch>
      <Redirect component={NotFound}/>
    </BrowserRouter>
  );
}

export default App;
