import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Routes from './routes/Routes';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Routes />
    </Router>
  );
}

export default App;
