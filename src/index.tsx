import { createElement } from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(
  createElement(App, { title: 'Stock Tracker App' }),
  document.getElementById('root')
);
