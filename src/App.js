import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
// import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Link exact to="/movies/new">ADICIONAR CARTÃO</Link>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        {/* <Route path="/:error" component={ NotFound } /> */}
      </BrowserRouter>
    );
  }
}

export default App;
