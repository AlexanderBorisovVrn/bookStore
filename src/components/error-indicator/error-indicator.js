import React from 'react';
import './error-indicator.css';
import errorImg from './browser.svg';
import {withBookstoreServiceContext} from '../hoc/'

const ErrorIndicator = ({bookstoreServiceContext}) => {
  return (
    <div className='error'>
      <img src={errorImg} width='100px' height='100px' alt=''/>
      <p>Sorry,something was terribly wrong</p>
      <p>{bookstoreServiceContext}</p>
    </div>
  )
}

export default withBookstoreServiceContext(ErrorIndicator)