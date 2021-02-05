import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MovieCard } from './components';
import Routes from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <MovieCard />
    </BrowserRouter>
  );
}

export default App;
