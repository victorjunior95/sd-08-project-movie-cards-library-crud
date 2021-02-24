// Bibliotecas React
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Componentes nível superior
import App from './App';
// Componentes nível inferior
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

export default function AppRouters() {
  return (
    <App>
      <Switch>
        <Route path="/" exact component={ MovieList } />
        <Route path="/movies/:id" exact component={ MovieDetails } />
      </Switch>
    </App>
  );
}
