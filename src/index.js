import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.hydrate(
  <App head='Wizard Form'/>,
  document.getElementById('root'),
);

