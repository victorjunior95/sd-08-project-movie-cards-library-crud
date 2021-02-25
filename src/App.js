import React from 'react';
import {BrowserRouter, router, link, Switch, Link}  from 'react-router-dom';
import '../App.css';
import {NewMovie, EditMovie, MovieList, NotFound,MovieDetails} from '../src/pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/" component={NewMovie} />
          <Route exact path="/" component={MovieDetails} />
          <Route exact path="/" component={EditMovie} />
          <Route exact path="/" component={NotFound} />
        </Switch>
        <Link to="/movie/new">ADICIONAR CARTAO</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
