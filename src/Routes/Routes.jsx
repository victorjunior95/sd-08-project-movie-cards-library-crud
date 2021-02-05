import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {MovieDetails, MovieList, NewMovie, EditMovie, NotFound} from '../pages'

class Routes extends React.Component {
    render() { 
        return (
            <Switch>
                <Route path="/" component={ MovieList } />
                <Route path="/movies/:id" component={ MovieDetails } />
                <Route path="/movies/new" component={ NewMovie } />
                <Route path="/movies/:id/edit" component={ EditMovie } />
                <Route component={ NotFound } />
          </Switch>
        );
    }
}
 
export default Routes;