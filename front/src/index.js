// == Import : npm
import React from 'react';
import  ReactDom  from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from 'src/store'
import history from './history';

// == Import : local
// Composants
import App from 'src/containers/App';


const rootReactElement = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
