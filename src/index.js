import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  React.createElement(App, { title: 'Stock Trader App' }),
  document.getElementById('root')
);
