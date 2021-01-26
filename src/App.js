import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
// import MovieDetails from './pages/MovieDetails';
// import NewMovie from './pages/NewMovie';
// import EditMovie from './pages/EditMovie';

function App() {
  return (    
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
        <Switch>
          <Route path="/" component={MovieList} />
          {/* <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id" render={ (props) => {
            <MovieDetails { ...props }/>
          }} />
          <Route path="/movies/:id/edit" render={ (props) => {
            <EditMovie { ...props }/>
          }} /> */}
        </Switch>
    </BrowserRouter>
  );
}

export default App;
