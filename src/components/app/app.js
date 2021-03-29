import React from 'react';
import './app.css'
import {withBookstoreServiceContext} from '../hoc';
import {HomePage, CartPage} from '../pages';

import {Route, Switch} from 'react-router';

const App = () => {
  return (
    <div className='app'>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/cart' component={CartPage}/>
      </Switch>
    </div>
  )
}

export default withBookstoreServiceContext(App)