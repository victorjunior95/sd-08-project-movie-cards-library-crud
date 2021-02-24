// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
// Components
import AppRouters from './AppRouters';
// Style
import './index.css';

ReactDOM.render(
  <Router>
    <AppRouters />
  </Router>, 
  document.getElementById('root'));


