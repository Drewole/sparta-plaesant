import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './fonts/ACaslonPro-Regular.otf'
import './fonts/Springville-Regular3.otf'
import './scss/main.scss'

require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
