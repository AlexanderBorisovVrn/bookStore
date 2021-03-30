import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import ErrorBoundry from './components/error-boundry';
import App from './components/app/';
import {BookStoreProvider} from './components/bookStore-context';
import store from './store'
import BookStoreService from './services/bookstore-service';

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
  <ErrorBoundry>
    <BookStoreProvider value={bookStoreService}>
      <Router>
        <App/>
      </Router>
    </BookStoreProvider>
  </ErrorBoundry>
</Provider>, document.getElementById('root'))
