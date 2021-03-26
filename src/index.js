import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router';

import ErrorBoundry from './components/error-boundry';
import App from './components/app/';
import {BookStoreProvider} from './components/bookStore-context';
import store from './store'
import BookStoreService from './services/bookstore-service';

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
  <ErrorBoundry>
    <BookStoreService value={bookStoreService}>
      <App/>
    </BookStoreService>
  </ErrorBoundry>
</Provider>, document.getElementById('root'))
