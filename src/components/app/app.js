import React from 'react';
import './app.css'
import {withBookstoreServiceContext} from '../hoc';
import {HomePage, CartPage} from '../pages';
import {Route, Switch} from 'react-router';
import Header from '../header';

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <Header/>
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/cart' component={CartPage}/>
        </Switch>
      </div>
    </div>
  )
}

export default withBookstoreServiceContext(App)