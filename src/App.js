import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, EditMovie, NewMovie, NotFound } from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

// posso importar os componentes direto do ./pages, pq foi criado index
// por isso q da certo o destructuring nesse caso
// exact path da match somente na "/" raiz
// doc react determina "*" para notFound

export default App;
