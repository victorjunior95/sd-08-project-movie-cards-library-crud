import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Movielist from './components/'

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route Path="/Movielist" component={Movielist} />
        <Route path="/movies/:id" render={(props) => <MovieDetails {...props}  /> } />
      </switch>
    </BrowserRouter>
  );
}

export default App;
