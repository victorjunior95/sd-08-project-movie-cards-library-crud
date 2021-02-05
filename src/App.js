import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes/Routes';
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
