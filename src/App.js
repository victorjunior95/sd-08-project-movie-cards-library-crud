import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Index from './pages/Index';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );
  }
}

export default App;
