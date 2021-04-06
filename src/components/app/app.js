import React from 'react';
import './app.css'
import {HomePage, CartPage} from '../pages';
import {Route, Switch} from 'react-router';
import Header from '../header';
import ShoppingCart from '../shopping-cart';

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <Header/>
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/cart' component={ShoppingCart}/>
        </Switch>
        
      </div>
    </div>
  )
}

export default App