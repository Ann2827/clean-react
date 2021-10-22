import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Normalize } from 'styled-normalize';

const app = (
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>
);

const root = document.querySelector('#root');

ReactDOM.render(app, root);
