import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import UserActions from './features/redux/actions/UserActions';
import Store from './features/redux/store';
import './index.css';
import App from './app';
// import * as serviceWorker from './serviceWorker';

const store = Store();
store.dispatch(UserActions.getAll());
store.dispatch(UserActions.add());
store.subscribe(() => {
    console.log('Store updated!',store.getState());
});

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
