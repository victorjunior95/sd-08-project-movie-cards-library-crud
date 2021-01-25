import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditMovie from './pages/EditMovie'
import MovieList from './pages/MovieList'
import NewMovie from './pages/NewMovie'
import NotFound from './pages/NotFound'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" render={(props) => props.id } />
          <Route path="/new" component={ NewMovie } />
          <Route path="FALTA PREENCHER" component={ NotFound }/>
          <Route path="/" component=  { MovieList } />
        </Switch>
      </BrowserRouter>
      <h1>Movie Card Library CRUD</h1>
    </div>
  );
}

export default App;
